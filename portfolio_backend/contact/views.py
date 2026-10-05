from django.shortcuts import redirect
from django.core.mail import send_mail
from .models import ContactMessage


def contact(request):

    if request.method == 'POST':

        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # Save message in database
        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        # Email to portfolio owner
        send_mail(
            subject=f"Portfolio Contact: {subject}",
            message=f"""
You received a new message from your portfolio website.

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
""",
            from_email='illapuyogendra3@gmail.com',
            recipient_list=['illapuyogendra3@gmail.com'],
        )

        # Confirmation email to visitor
        send_mail(
            subject="Thank you for contacting Illapu Yogendra",
            message=f"""
Hello {name},

Thank you for contacting me through my portfolio website.

I have received your message successfully.

Your message:
{message}

I will get back to you soon.

Regards,
Illapu Yogendra
""",
            from_email='illapuyogendra3@gmail.com',
            recipient_list=[email],
        )

        return redirect('/#contact')

    return redirect('/#contact')