from rest_framework.response import Response

def home(request):
    return Response(
        {
            'messege':'Hello World'
        }
    )