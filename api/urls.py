from django.urls import path
from .views import (
    UserRegistrationAPIView,
    UserLoginAPIView,
    UserDetailAPIView,
    ReportListCreateView,
    ReportDeleteView,
)

urlpatterns = [
    path("register/", UserRegistrationAPIView.as_view(), name="register"),
    path("login/", UserLoginAPIView.as_view(), name="login"),
    path("user/", UserDetailAPIView.as_view(), name="user-detail"),
    path("reports/", ReportListCreateView.as_view(), name="report-list-create"),
    path("reports/<int:pk>/", ReportDeleteView.as_view(), name="report-delete"),
]
