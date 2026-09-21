from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import UserProfile


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'Profile'


class CustomUserAdmin(BaseUserAdmin):
    inlines = (UserProfileInline,)


# ১. ড্যাঙ্গোর ডিফল্ট User মডেল Unregister করা
admin.site.unregister(User)

# ২. UserProfile সহ Custom UserAdmin নতুন করে Register করা
admin.site.register(User, CustomUserAdmin)
admin.site.register(UserProfile)