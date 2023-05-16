from rest_framework.pagination import (
    PageNumberPagination,
    LimitOffsetPagination,
    CursorPagination
)

class CustomPageNumberPagination(PageNumberPagination):
    page_size = 25
    page_size_query_param = 'adet'
    page_query_param = 'sayfa'

class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 25
    limit_query_param = 'adet'
    offset_query_param = 'baslangic'

class CustomCursorPagination(CursorPagination):
    page_size = 25
    ordering = 'id'
    cursor_query_param = 'imlec'
