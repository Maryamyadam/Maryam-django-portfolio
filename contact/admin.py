from django.contrib import admin
from .models import Project, Skill, Experience


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'year',
        'role',
    )

    search_fields = (
        'title',
        'description',
        'technologies',
    )

    list_filter = (
        'year',
    )


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'category',
    )

    search_fields = (
        'name',
    )

    list_filter = (
        'category',
    )


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        'date',
        'title',
        'company',
    )

    search_fields = (
        'title',
        'company',
        'description',
    )