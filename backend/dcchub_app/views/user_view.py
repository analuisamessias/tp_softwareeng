from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from ..models import User
from ..serializers import AdminUserSerializer, UserSerializer
from .permissions import IsAdminOrSuperUser, IsCurrentUser

class AdminUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_staff=True)
    serializer_class = AdminUserSerializer
    permission_classes = [IsAuthenticated, IsAdminOrSuperUser]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_staff=False)
    serializer_class = UserSerializer
    
    def get_permissions(self):
        if self.action in ['create']:
            # Qualquer pessoa pode criar usuário, apenas admins têm acesso ao resto
            return []
        elif self.action in ['retrieve', 'update', 'partial_update', 'destroy']:
            # Somente o próprio usuário ou admin pode acessar os dados do usuário
            return [IsAuthenticated(), (IsCurrentUser|IsAdminUser)()]
        else:
            return [IsAuthenticated()]