from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from ..models.professor import Professor
from ..models.user import User

class ProfessorTestCase(TestCase):
    def setUp(self):
        # Criar um superusuário
        self.superuser = User.objects.create_superuser(
            email='super@example.com',
            nome='Super Admin',
            password='supersenha123'
        )
        
        # Criar um usuário comum
        self.user = User.objects.create_user(
            email='user@example.com',
            nome='Usuário Normal',
            password='senha123'
        )

        # Criar professores
        self.professor = Professor.objects.create(nome='Professor Exemplo 1')
        self.professor2 = Professor.objects.create(nome='Professor Exemplo 2')

        # Cliente para fazer requisições
        self.client = APIClient()

    def test_listar_professores(self):
        """Qualquer usuário pode listar professores"""
        response = self.client.get('/api/professores/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_criar_professor_como_superuser(self):
        """Apenas admin pode criar professor"""
        self.client.force_authenticate(user=self.superuser)
        
        novo_professor = {'nome': 'Professor Novo'}
        response = self.client.post('/api/professores/', novo_professor, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_criar_professor_como_usuario_comum(self):
        """Usuário comum não pode criar professor"""
        self.client.force_authenticate(user=self.user)
        
        novo_professor = {'nome': 'Professor Novo'}
        response = self.client.post('/api/professores/', novo_professor, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)