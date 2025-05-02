from rest_framework import serializers
from ..models import Disciplina, Professor

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