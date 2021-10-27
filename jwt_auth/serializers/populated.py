from rest_framework import serializers
from .common import UserSerializer
from wines.serializers.common import WineSerializer


class PopulatedUserSerializer(UserSerializer):
    favourites = UserSerializer()
