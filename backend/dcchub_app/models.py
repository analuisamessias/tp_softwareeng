from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

"""class UserManager(BaseUserManager):
    def create_user(self, email, senha=None, **extra_fields):
        if not email:
            raise ValueError('O email deve ser informado.')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(senha)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, senha=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, senha, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    senha = models.CharField(max_length=128)  # A senha será criptografada
    email = models.EmailField(unique=True)
    nome = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='profile_photos/', null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome']

    def __str__(self):
        return self.email"""
