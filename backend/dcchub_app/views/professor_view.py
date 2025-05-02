from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from ..models import Professor
from ..serializers import ProfessorSerializer

class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            # Qualquer pessoa autenticada pode listar ou ver detalhes de professores
            return [IsAuthenticated()]
        # Somente admin pode criar, atualizar, excluir
        return [IsAuthenticated(), IsAdminUser()]