from django.test import TestCase
from ..models.user import User

class UserTestCase(TestCase):
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

    def test_superuser_creation(self):
        """Testa a criação de um superusuário"""
        self.assertTrue(self.superuser.is_superuser)
        self.assertTrue(self.superuser.is_staff)

    def test_user_creation(self):
        """Testa a criação de um usuário comum"""
        self.assertFalse(self.user.is_superuser)
        self.assertFalse(self.user.is_staff)