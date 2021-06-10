from django.core.mail import send_mail


def beat_order_notification(url, order, email):
    """
    Emails the User the download link.
    :param url: Download url for beat order
    :param order: order object
    :param email: user object
    :return: Emails the user the beat order details
    """
    print("herr")

    subject = "Beat Order from AKMarv"
    content = "Please click the link provided below to download the files attached to your order.\n" \
              "Order Reference ID: {0} \n"\
              "Amount: {1} \n"\
              "Download Link: {2}".format(order.reference_id, order.total_amount, url)
    send_mail(subject, content, 'AMarv', [email], fail_silently=False)

def beat_order_failed():

    pass

# def listener_booking_cancellation(session):
#     """
#     Emails a Listener that a Talker has cancelled a booking.
#     :param session: Session object
#     :param request: request object, for host retrieval
#     :return: Emails the listener the booking cancellation
#     """
#     subject = "Good Chat Session Booking"
#     content = f'Dear {session.listener.user.first_name},\n\n{session.talker.pseudonym} has cancelled the session they booked with you. ' \
#               f'The following are the details of the cancelled session:\n\n' \
#               f'Subject: {session.subject}\n{session.talker.pseudonym}\'s mood: {session.mood_before}\n' \
#               f'Scheduled Date: {session.scheduled_time}\n\n' \
#               f'Thank you.\nGood Chat Team'
#     send_mail(subject, content, 'Good Chat', [session.listener.user.email], fail_silently=True)
