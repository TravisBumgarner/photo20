# Generated by Django 2.1.1 on 2018-09-03 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0004_auto_20180903_1630'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='year',
            field=models.IntegerField(null=True),
        ),
    ]
