# Generated by Django 4.2.7 on 2024-03-27 16:59

from django.db import migrations, models
import talent_reserves.yandex_s3_storage


class Migration(migrations.Migration):

    dependencies = [
        ('coaches', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coach',
            name='photo',
            field=models.ImageField(default=None, null=True, storage=talent_reserves.yandex_s3_storage.ClientMediaStorage(), upload_to='coaches/'),
        ),
    ]
