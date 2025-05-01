from rest_framework import serializers
from .models import User, Disciplina, Professor
from django.conf import settings
from django.contrib.auth import get_user_model

class AdminUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, required=False)
    
    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'nome', 'photo', 'is_staff', 'is_superuser', 'password']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = super().create(validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    
    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'nome', 'photo', 'password']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User.objects.create(**validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user


class DisciplinaSerializer(serializers.ModelSerializer):
    professor = serializers.PrimaryKeyRelatedField(
        queryset=Professor.objects.all(),
        write_only=True
    )
    nome_professor = serializers.CharField(
        source='professor.nome',
        read_only=True
    )
    
    class Meta:
        model = Disciplina
        fields = '__all__'

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = ['id', 'nome']