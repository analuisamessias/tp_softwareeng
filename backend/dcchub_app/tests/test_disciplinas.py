from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from ..models.disciplina import Disciplina
from ..models.professor import Professor
from ..models.user import User

class DisciplinaTestCase(TestCase):
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

        # Criar professor
        self.professor = Professor.objects.create(nome='Professor Exemplo 1')

        # Criar disciplina
        self.disciplina = Disciplina.objects.create(
            codigo='DCC001',
            nome='Introdução à Computação',
            turma='T01',
            sala='2001',
            inicio='08:00',
            fim='10:00',
            dias='Segunda,Quarta',
            professor=self.professor
        )

        # Cliente para fazer requisições
        self.client = APIClient()

    def test_listar_disciplinas(self):
        """Qualquer usuário pode listar disciplinas"""
        response = self.client.get('/api/disciplines/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_criar_disciplina_como_superuser(self):
        """Apenas admin pode criar disciplina"""
        self.client.force_authenticate(user=self.superuser)
        
        nova_disciplina = {
            'codigo': 'DCC002',
            'nome': 'Programação',
            'turma': 'T01',
            'sala': '2002',
            'inicio': '10:00',
            'fim': '12:00',
            'dias': 'Terça,Quinta',
            'professor': self.professor.id
        }
        
        response = self.client.post('/api/disciplines/', nova_disciplina, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_criar_disciplina_como_usuario_comum(self):
        """Usuário comum não pode criar disciplina"""
        self.client.force_authenticate(user=self.user)
        
        nova_disciplina = {
            'codigo': 'DCC003',
            'nome': 'Algoritmos',
            'turma': 'T01',
            'sala': '2003',
            'inicio': '14:00',
            'fim': '16:00',
            'dias': 'Segunda,Quarta',
            'professor': self.professor.id
        }
        
        response = self.client.post('/api/disciplines/', nova_disciplina, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)