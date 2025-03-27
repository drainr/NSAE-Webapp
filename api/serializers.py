from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers
from .models import VolunteerHistory, Report

User = get_user_model()

class VolunteerHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerHistory
        fields = ['event_name', 'hours', 'date']

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return {'user': user}
        raise serializers.ValidationError("Invalid username or password.")

class UserSerializer(serializers.ModelSerializer):
    volunteer_history = VolunteerHistorySerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'volunteer_history']

class ReportSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='user.username', read_only=True)
    content = serializers.CharField()

    class Meta:
        model = Report
        fields = ['id', 'content', 'priority', 'author', 'timestamp']
