from rest_framework import serializers
from ..models import Wine
# define serializers


class WineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wine
        fields = '__all__'
