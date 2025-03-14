INSTALLED_APPS = [
    'channels',
    'notifs',
    'NSAE_WEBAPP',
    'django.contrib.auth',
    'django.contrib.contenttypes',
]

ASGI_APPLICATION = 'NSAE_WEBAPP.asgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'memory',
    }
}