from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

# this specifies that a view is secure on all methods except get request
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Wine
from .serializers.common import WineSerializer
from .serializers.populated import PopulatedWineSerializer

# define controllers


class WineListView(APIView):
    # sets permission levels of specifuc view by pasing in the rest framework authenticaton
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # get ALL wines
    def get(self, _request):
        wines = Wine.objects.all()
        serialized_wines = WineSerializer(wines, many=True)
        return Response(serialized_wines.data, status=status.HTTP_200_OK)

    # POST add new wine to db
    def post(self, request):
        request.data['owner'] = request.user.id
        wine_to_add = WineSerializer(data=request.data)
        if wine_to_add.is_valid():
            wine_to_add.save()
            return Response(wine_to_add.data, status=status.HTTP_201_CREATED)
        return Response(wine_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class WineDetailView(APIView):

    # sets permission levels of specifuc view by pasing in the rest framework authenticaton
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # our universal error if a wine cannot by found
    def get_wine(self, pk):
        try:
            return Wine.objects.get(pk=pk)
        except Wine.DoesNotExist:
            raise NotFound(detail="🍷 That bottle could not be found")

    # define our GET for single wine
    def get(self, _request, pk):
        wine = self.get_wine(pk=pk)
        serialized_wine = PopulatedWineSerializer(wine)
        return Response(serialized_wine.data, status=status.HTTP_200_OK)

    # DELETE a single wine
    def delete(self, _request, pk):
        wine_to_delete = self.get_wine(pk=pk)
        wine_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # PUT update a single wine
    def put(self, request, pk):
        wine_to_update = self.get_wine(pk=pk)
        updated_wine = WineSerializer(wine_to_update, data=request.data)
        if updated_wine.is_valid():
            updated_wine.save()
            return Response(updated_wine.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_wine.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
