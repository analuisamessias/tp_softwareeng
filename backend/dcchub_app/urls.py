from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdminUserViewSet, UserViewSet, DisciplinaViewSet

router = DefaultRouter()
router.register(r'admin-users', AdminUserViewSet, basename='admin-users')
router.register(r'users', UserViewSet, basename='users')
router.register(r'disciplines', DisciplinaViewSet, basename='disciplines') 

urlpatterns = [
    path('', include(router.urls)),
]
