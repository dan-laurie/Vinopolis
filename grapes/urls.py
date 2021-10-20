from django.urls import path
from .views import GrapeListView

urlpatterns = [
    path('', GrapeListView.as_view())
]
