from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from ..models import Disciplina
from ..serializers import DisciplinaSerializer
import django_filters

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