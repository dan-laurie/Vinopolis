from rest_framework import serializers
from ..models import Grape


class GrapeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grape
        fields = "__all__"
