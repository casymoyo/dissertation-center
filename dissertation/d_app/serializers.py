from rest_framework import serializers
from . models import User, client, dissertation

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class clientSerializer(serializers.ModelSerializer):
    class Meta:
        model = client
        fields = '__all__'

class dissertationSerializer(serializers.ModelSerializer):
    class Meta:
        model = dissertation
        fields = '__all__'