# Generated by Django 2.1.1 on 2018-09-08 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0009_auto_20180905_1745'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='src_thumbnail_small',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
