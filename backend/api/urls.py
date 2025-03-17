from django.urls import path
from . import views

urlpatterns = [
    path("reports/", views.ReportListCreate.as_view(), name="report-list"),
    path("reports/delete/<int:pk>/", views.ReportDelete.as_view(), name="delete-report"),
]