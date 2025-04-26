from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

class AdminViewSet(viewsets.ViewSet):
    """
    ViewSet para operações de CRUD do perfil do administrador.
    """

    def list(self, request):
        # TODO: Listar todos os administradores
        return Response({"message": "Listar administradores"}, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        # TODO: Detalhar um administrador
        return Response({"message": f"Detalhar administrador {pk}"}, status=status.HTTP_200_OK)

    def create(self, request):
        # TODO: Criar um novo administrador
        return Response({"message": "Criar administrador"}, status=status.HTTP_201_CREATED)

    def update(self, request, pk=None):
        # TODO: Atualizar um administrador
        return Response({"message": f"Atualizar administrador {pk}"}, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        # TODO: Deletar um administrador
        return Response({"message": f"Deletar administrador {pk}"}, status=status.HTTP_204_NO_CONTENT)

# Create your views here.
