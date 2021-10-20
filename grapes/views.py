from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Grape

from .serializers.populated import PopulatedGrapeSerializer


class GrapeListView(APIView):

    def get(self, _request):
        grapes = Grape.objects.all()
        serialized_grapes = PopulatedGrapeSerializer(grapes, many=True)
        return Response(serialized_grapes.data, status=status.HTTP_200_OK)
