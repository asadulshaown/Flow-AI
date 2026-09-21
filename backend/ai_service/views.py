from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import AIQuery

class AIAssistantView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        prompt = request.data.get('prompt', '')
        if not prompt:
            return Response({'error': 'Prompt is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Simulated AI response logic for SaaS Project Management
        ai_reply = f"AI Analysis for '{prompt}': Project workflow is optimal. Recommended next step: Complete milestone breakdown and assign lead developer."
        
        if request.user.is_authenticated:
            AIQuery.objects.create(user=request.user, prompt=prompt, response=ai_reply)
        else:
            AIQuery.objects.create(prompt=prompt, response=ai_reply)

        return Response({
            'prompt': prompt,
            'response': ai_reply,
            'status': 'success'
        })

class AISuggestionsView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        suggestions = [
            "Optimize database indexing for high concurrency.",
            "Integrate SSLCommerz sandbox payment gateway.",
            "Implement JWT auto-refresh token strategy.",
            "Add dark mode theme using Tailwind CSS variable tokens."
        ]
        return Response({'suggestions': suggestions})
