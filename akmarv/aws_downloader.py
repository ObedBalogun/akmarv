import logging
import boto3
from botocore.exceptions import ClientError
from decouple import config

ACCESS_KEY = config('AWS_ACCESS_KEY')
SECRET_KEY = config('AWS_SECRET_KEY')
BUCKET_NAME = config('BUCKET_NAME')


def create_presigned_url(object_name, bucket_name=BUCKET_NAME, expiration=3600):
    """Generate a presigned URL to share an S3 object

    :param bucket_name: string
    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Presigned URL as string. If error, returns None.
    """

    # Generate a presigned URL for the S3 object
    s3_client = boto3.client('s3', aws_access_key_id=ACCESS_KEY,
                             aws_secret_access_key=SECRET_KEY,region_name='eu-west-3')
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': object_name},
                                                    ExpiresIn=expiration,)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL
    return response

# print(create_presigned_url("marvs_beats/mp3_files/Moana.mp3"))