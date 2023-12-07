
from django.utils import timezone
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from blog.models import Post, Tag, TagPost
from coaches.models import Coach
from news.models import News

from .pagination import BlogPagination, CoachPagination, NewsPagination
from .serializers import CoachSerializer, NewsSerializer, PostSerializer


class CoachViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Вьюсет для отображения информации о тренерах.
    Работает только на чтение (list, retrieve).
    Имеется фильтрация по полю slug модели Directions.
    """
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['directions__slug',]
    pagination_class = CoachPagination


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    """Вьюсет для отображения списка новостей."""
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    pagination_class = NewsPagination

    def get_queryset(self):
        current_datetime = timezone.now()
        queryset = News.objects.filter(date_published__lte=current_datetime)
        return queryset


class PostListViewSet(viewsets.ReadOnlyModelViewSet):
    """Вьюсет для работы с постами."""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = BlogPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['tags__name']

    def get_queryset(self):
        queryset = super().get_queryset()
        tag_names = self.request.query_params.getlist('tags__name')

        if tag_names:
            tag_ids = Tag.objects.filter(name__in=tag_names).values_list(
                'id', flat=True)
            post_ids = TagPost.objects.filter(tag_id__in=tag_ids).values_list(
                'post_id', flat=True).distinct()
            queryset = queryset.filter(id__in=post_ids)

        return queryset


@api_view()
def get_ok(request):
    '''
    Тестовая вью-функция для SwaggerUI
    '''
    return Response({"message": "ok"})
