from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class UserTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.signup_url = reverse('register')  # Assuming 'register' is the correct URL name
        self.login_url = reverse('login')      # Assuming 'login' is the correct URL name
        self.user_data = {
            'fname': 'John',
            'lname': 'Doe',
            'email': 'john@example.com',
            'password': 'test1234',
            'phone_number': '1234567890',
        }

    def test_user_registration(self):
        response = self.client.post(self.signup_url, self.user_data)
        self.assertEqual(response.status_code, 201)  # Assuming the register view returns 201 on success

        user = User.objects.get(email='john@example.com')
        self.assertIsNotNone(user)
        self.assertEqual(user.profile.phone_number, '1234567890')

    def test_user_login(self):
        self.client.post(self.signup_url, self.user_data)
        login_data = {'email': 'john@example.com', 'password': 'test1234'}
        response = self.client.post(self.login_url, login_data)
        self.assertEqual(response.status_code, 200)

        tokens = response.json()
        self.assertIn('refresh', tokens)
        self.assertIn('access', tokens)

    def test_failed_login(self):
        login_data = {'email': 'wrong@example.com', 'password': 'wrongpass'}
        response = self.client.post(self.login_url, login_data)
        self.assertEqual(response.status_code, 400)

    def test_jwt_authentication(self):
        self.client.post(self.signup_url, self.user_data)
        login_data = {'email': 'john@example.com', 'password': 'test1234'}
        response = self.client.post(self.login_url, login_data)

        tokens = response.json()
        access_token = tokens['access']

        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + access_token)
        response = self.client.get(reverse('some_protected_endpoint'))  # Ensure you have a protected endpoint
        self.assertEqual(response.status_code, 200)


