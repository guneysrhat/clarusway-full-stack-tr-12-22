from rest_framework.routers import DefaultRouter
# from .views import tutorial_detail, tutorial_list

from .views import TutorialView

router = DefaultRouter()
router.register("tutorials",TutorialView)

urlpatterns = router.urls

#fbv
# urlpatterns += [
#     path("tutorialsfbv/",tutorial_list,name="tutorial"),
#     path("tutorialsfbv/<int:id>",tutorial_detail,name="tutorial_detail"),
# ]