from django.urls import path
from .views import AIAssistantView, AISuggestionsView

urlpatterns = [
    path('assistant/', AIAssistantView.as_view(), name='ai-assistant'),
    path('suggest/', AISuggestionsView.as_view(), name='ai-suggest'),
]
