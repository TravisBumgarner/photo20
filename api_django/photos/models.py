from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Project(models.Model):
    name = models.CharField(max_length=200, unique=True)
    category = models.ManyToManyField("Category", blank=True)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)

    def __unicode__(self):
        return self.name


class Photo(models.Model):
    src = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    project = models.ManyToManyField("Category", blank=True)
    location = models.CharField(max_length=200)
    width = models.IntegerField()
    height = models.IntegerField()
    meta = models.TextField()
    date = models.DateField(null=True)   