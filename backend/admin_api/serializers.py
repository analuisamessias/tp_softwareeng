from rest_framework import serializers

class AdminSerializer(serializers.Serializer):
    # Campos fictícios até os modelos estarem prontos
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
