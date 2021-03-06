from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from datetime import datetime, timedelta
from django.contrib.auth import get_user_model

from jwt_auth.serializers.populated import PopulatedUserSerializer
from .models import User
from django.conf import settings
import jwt

from .serializers.common import UserSerializer
User = get_user_model()

# REGISTER USER


class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        if user_to_create.is_valid():
            user_to_create.save()
            return Response({
                'message': 'Registration Successful! ✅ '
            },
                status=status.HTTP_202_ACCEPTED
            )
        return Response(user_to_create.errors,
                        status=status.HTTP_422_UNPROCESSABLE_ENTITY
                        )

# LOGIN USER


class LoginView(APIView):

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied(detail="Invalid Credentials ❌ ")

        # check to make sure the password is correct for that user
        if not user_to_login.check_password(password):
            raise PermissionDenied(detail="Invalid Credentials ❌ ")

        # add current datetimestamp to a 7 day datetimestamp string to have an expiry of 7 days
        dt = datetime.now() + timedelta(days=7)
        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm='HS256'
        )
        # return token to user as a response
        return Response({'token': token, 'message':
                        f"Welcome back, {user_to_login.username}!"},
                        status=status.HTTP_200_OK)


class UserDetailView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = User.objects.get(pk=request.user.id)
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)
