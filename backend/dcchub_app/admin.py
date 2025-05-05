from django.contrib import admin
from .models import Professor, User
# Register your models here.

admin.site.register(Professor)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass