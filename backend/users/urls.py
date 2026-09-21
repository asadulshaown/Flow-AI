
from django.urls import path  # type: ignore[reportMissingModuleSource]
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)  # type: ignore[reportMissingImports]
from .views import RegisterView, UserProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', UserProfileView.as_view(), name='profile'),
]