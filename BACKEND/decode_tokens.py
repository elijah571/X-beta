import jwt
from django.conf import settings
import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'X_BETA.settings')
django.setup()

print("Starting script...")

# Replace with your actual tokens
access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxNDE2MDEwLCJpYXQiOjE3MjE0MTU3MTAsImp0aSI6ImI0OTY4NDc4NzhkYzQwYjM4M2E1YjE0ZjJiYmY3ZmIyIiwidXNlcl9pZCI6MTF9.MVXj3z5UmjieIyF9XqaIXg_4o7xZsJlA22bpv_U-HNo'
refresh_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTUwMjExMCwiaWF0IjoxNzIxNDE1NzEwLCJqdGkiOiJjYmE5NTg1MmIzMDE0YTMyOGZmZDhjZGVlNTZiYzU5MCIsInVzZXJfaWQiOjExfQ.lVNoaeQbxpwsZ8wi2H9gF8K--9tLoBxcvlN4KWd5q80'

# Get secret key from Django settings
secret_key = settings.SECRET_KEY

try:
    # Decode the access token
    decoded_access = jwt.decode(access_token, secret_key, algorithms=['HS256'])
    print('Access Token:', decoded_access)
    
    # Decode the refresh token
    decoded_refresh = jwt.decode(refresh_token, secret_key, algorithms=['HS256'])
    print('Refresh Token:', decoded_refresh)
    
except jwt.ExpiredSignatureError:
    print('Token expired.')
except jwt.InvalidTokenError:
    print('Invalid token.')
except Exception as e:
    print(f'An error occurred: {e}')



