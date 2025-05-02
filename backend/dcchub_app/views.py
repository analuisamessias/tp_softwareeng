from rest_framework import viewsets, permissions
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
import django_filters
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
    permission_classes = [IsAuthenticated, IsAdminOrSuperUser]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_staff=False)
    serializer_class = UserSerializer
    
    def get_permissions(self):
        if self.action in ['create']:
            # Qualquer pessoa pode criar usuário, apenas admins têm acesso ao resto
            return []
        return [IsAuthenticated()]

class DisciplinaFilter(django_filters.FilterSet):
    sala = django_filters.CharFilter(field_name='sala', lookup_expr='icontains')  # Filtro parcial para 'sala'

    class Meta:
        model = Disciplina
        fields = ['dias', 'sala']

class DisciplinaViewSet(viewsets.ModelViewSet):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)

    filterset_class = DisciplinaFilter
    search_fields = ['nome', 'professor__nome']
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            # Qualquer pessoa autenticada pode listar ou ver detalhes de disciplinas
            return [IsAuthenticated()]
        # Somente admin pode criar, atualizar, excluir
        return [IsAuthenticated(), IsAdminUser()]
    
class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            # Qualquer pessoa autenticada pode listar ou ver detalhes de professores
            return [IsAuthenticated()]
        # Somente admin pode criar, atualizar, excluir
        return [IsAuthenticated(), IsAdminUser()]
    
def test_view(request):
    return JsonResponse({"message": "API funcionando!"})
