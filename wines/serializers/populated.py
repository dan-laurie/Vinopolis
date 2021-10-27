from .common import WineSerializer
from reviews.serializers.populated import PopulatedReviewSerializer
from grapes.serializers.common import GrapeSerializer
from jwt_auth.serializers.common import UserSerializer
from jwt_auth.serializers.populated import PopulatedUserSerializer


class PopulatedWineSerializer(WineSerializer):
    reviews = PopulatedReviewSerializer(many=True)
    grapes = GrapeSerializer(many=True)
    owner = UserSerializer()
    favourites = PopulatedUserSerializer(many=True)
