from django.urls import path
from rest_framework.authtoken import views as authviews
from . import views
urlpatterns = [
    path('', views.index),
    path('api-token-auth/',authviews.obtain_auth_token,name='api-token-auth')
]