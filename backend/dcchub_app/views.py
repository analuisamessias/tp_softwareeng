from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import User, Disciplina, Professor
from django.http import JsonResponse
from .serializers import AdminUserSerializer, UserSerializer, DisciplinaSerializer, ProfessorSerializer

class IsAdminOrSuperUser(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and (request.user.is_staff or request.user.is_superuser)

class AdminUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_staff=True)
    serializer_class = AdminUserSerializer
    permission_classes = [IsAdminOrSuperUser]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_staff=False)
    serializer_class = UserSerializer
    
    def get_permissions(self):
        if self.action in ['create', 'list']:
            # Qualquer pessoa pode criar usuário ou listar usuários
            return []
        return [IsAuthenticated()]

class DisciplinaViewSet(viewsets.ModelViewSet):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            # Qualquer pessoa pode listar ou ver detalhes de disciplinas
            return []
        # Somente admin pode criar, atualizar, excluir
        return [IsAdminUser()]
    
class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            # Qualquer pessoa pode listar ou ver detalhes de professores
            return []
        # Somente admin pode criar, atualizar, excluir
        return [IsAdminUser()]
    
def test_view(request):
    return JsonResponse({"message": "API funcionando!"})
