from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    year = models.IntegerField()
    description = models.TextField()
    result = models.CharField(max_length=300)
    technologies = models.CharField(max_length=300)
    role = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('Languages', 'Languages'),
        ('Frontend', 'Frontend'),
        ('Backend', 'Backend'),
        ('Platform', 'Platform'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES
    )

    def __str__(self):
        return f"{self.category} - {self.name}"


class Experience(models.Model):
    date = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return f"{self.title} - {self.company}"