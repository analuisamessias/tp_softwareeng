from rest_framework import permissions

class IsAdminOrSuperUser(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and (request.user.is_staff or request.user.is_superuser)
    
class IsCurrentUser(permissions.BasePermission):
    # Apenas o usuário autenticado pode acessar seus próprios dados
    def has_object_permission(self, request, view, obj):
        return request.user == obj