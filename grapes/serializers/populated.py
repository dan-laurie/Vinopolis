from .common import GrapeSerializer
from wines.serializers.common import WineSerializer


class PopulatedGrapeSerializer(GrapeSerializer):
    wines = WineSerializer(many=True)
