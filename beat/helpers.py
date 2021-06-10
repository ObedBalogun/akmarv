import random
import string
import uuid

# import dateutil
from djmoney.money import Money


def error_msg(msg):
    """Returns a dictionary mapping error to msg."""
    return {'status': "failed", 'message': msg}


def success_msg(msg, data):
    """Returns a dictionary mapping status, message and data."""
    return {'status': 'successful', "message": msg, 'data': data}


def validate_email(email):
    from django.core.validators import validate_email
    from django.core.exceptions import ValidationError
    try:
        validate_email(email)
        return True
    except ValidationError:
        return False


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass
    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass
    return False



def generate_referral_code(model, pin_length=6):
    chars = ''
    chars += string.ascii_uppercase + string.digits
    if not pin_length:
        pin_length = 6  # default to 6 chars
    exist = True
    generated_id = ''
    while exist:
        generated_id = ''.join(random.choice(chars) for _ in range(pin_length))
        obj_exists = model.objects.filter(referral_code=generated_id).exists()
        if not obj_exists:
            break
    return generated_id


def generate_uuid(model, pin):
    generated_uuid = ''
    exist = True
    while exist:
        generated_uuid = uuid.uuid5(uuid.NAMESPACE_DNS, pin).urn[9:]
        obj_exists = model.objects.filter(pin_id=generated_uuid).exists()
        if not obj_exists:
            break
    return generated_uuid


def djmoney_to_cent(djmoney):
    """
    Converts an instant of Django Money to Cent
    :param djmoney: the instance of Django Money
    :return: Cent value in integer
    """
    return int(float(djmoney.amount) * 100)


def cent_to_djmoney(cent):
    """
        Converts an instant of Cent to Django Money
        :param cent: the instance of Django Money
        :return: Django Money object is returned
    """
    return Money(float(cent / 100), 'USD')
