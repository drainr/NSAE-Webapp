from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Report, Profile, Role


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['hobby', 'town', 'profile_image']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = ["id", "username", "password", "profile"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)

        profile_data = validated_data.pop('profile', None)
        if profile_data:
            role = Role.objects.get(role="Volunteer")
            Profile.objects.create(user=user, **profile_data)
        return user

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}