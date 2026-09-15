from django.shortcuts import render

from .models import Project, Skill, Experience


def home(request):
    projects = Project.objects.all().order_by('-year')
    skills = Skill.objects.all().order_by('category', 'name')
    experiences = Experience.objects.all()

    return render(request, 'index.html', {
        'projects': projects,
        'skills': skills,
        'experiences': experiences,
    })