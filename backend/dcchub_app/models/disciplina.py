from django.db import models
from .professor import Professor

class Disciplina(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=10)
    nome = models.CharField(max_length=100)
    turma = models.CharField(max_length=10)
    sala = models.CharField(max_length=10)
    inicio = models.CharField(max_length=5)  # formato HH:MM
    fim = models.CharField(max_length=5)  # formato HH:MM
    dias = models.CharField(max_length=50)  # "Segunda,Quarta,Sexta"
    professor = models.ForeignKey(Professor, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.codigo} - {self.nome} (Turma {self.turma})"