from rest_framework import status, permissions  # pyright: ignore[reportMissingImports]
from rest_framework.response import Response  # pyright: ignore[reportMissingImports]
from rest_framework.views import APIView  # pyright: ignore[reportMissingImports]
from rest_framework_simplejwt.tokens import RefreshToken  # pyright: ignore[reportMissingImports]
from django.contrib.auth import get_user_model  # pyright: ignore[reportMissingModuleSource]
from .serializers import RegisterSerializer

User = get_user_model()

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            
            # রেজিস্ট্রেশনের সাথেই JWT Access & Refresh Token তৈরি
            refresh = RefreshToken.for_user(user)
            
            return Response({
                "message": "User registered successfully!",
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email
                },
                "access": str(refresh.access_token),
                "refresh": str(refresh)
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        
        # UserProfile মডেল থেকে নিরাপদভাবে role ও subscription_plan রিড করা
        role = user.profile.role if hasattr(user, 'profile') else 'member'
        subscription_plan = user.profile.subscription_plan if hasattr(user, 'profile') else 'free'

        return Response({
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'role': role,
            'subscription_plan': subscription_plan,
        })