from rest_framework import routers
from .api import TaskViewSet, FAQViewSet, ResourceViewSet, EmployeeViewSet, TextAPIView, SearchViewSet

router = routers.DefaultRouter()
router.register('api/tasks', TaskViewSet, 'tasks'),
router.register('api/FAQ', FAQViewSet, 'FAQ'),
router.register('api/Resources', ResourceViewSet, 'Resource'),
router.register('api/Employees', EmployeeViewSet, 'Employee'),
router.register('api/search', SearchViewSet, 'Search'),
router.register('api/data', TextAPIView, 'texts'),


urlpatterns = router.urls