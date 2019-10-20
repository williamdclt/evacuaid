import csv
import json
import uuid
from datetime import datetime
from io import StringIO
from urllib.request import Request, urlopen

from boto3 import client, resource
from boto3.dynamodb.conditions import Key


def eventCreater(event, context):
    try:
        request = Request(
            "https://nrt4.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/viirs/USA_contiguous_and_Hawaii/VIIRS_I_USA_contiguous_and_Hawaii_VNP14IMGTDL_NRT_2019293.txt"
        )
        request.add_header(
            "Authorization", "Bearer E2243090-F269-11E9-99F5-4EF3207B60E0"
        )
        response = urlopen(request)
        csv_file = StringIO(response.read().decode("utf-8"))
        csv_reader = csv.DictReader(csv_file, skipinitialspace=True)
        for row in csv_reader:
            create_dynamo_item(dict(row))
    except Exception as err:
        print(err)


def query_dynamo_item(latitude, longitude):
    dynamodb = resource("dynamodb", region_name="eu-west-2")
    table = dynamodb.Table("evacuaid-backend-dev-table")
    responseLat = table.query(
        IndexName="latitudeIndex", KeyConditionExpression=Key("latitude").eq(latitude)
    )
    responseLong = table.query(
        IndexName="longitudeIndex",
        KeyConditionExpression=Key("longitude").eq(longitude),
    )
    if len(responseLat["Items"]) > 0 and len(responseLong["Items"]) > 0:
        return responseLat["Items"][0].get("uuid")
    else:
        return None


def create_dynamo_item(fire):
    current_event_uuid = query_dynamo_item(fire.get("latitude"), fire.get("longitude"))
    CLIENT = client("dynamodb", region_name="eu-west-2")
    if current_event_uuid is not None:
        CLIENT.update_item(
            TableName="evacuaid-backend-dev-table",
            Key={"uuid": {"S": current_event_uuid}},
            UpdateExpression=f"set json = :r",
            ExpressionAttributeValues={":r": {"S": json.dumps(fire)}},
            ReturnValues="UPDATED_NEW",
        )
    else:
        CLIENT.put_item(
            TableName="evacuaid-backend-dev-table",
            Item={
                "uuid": {"S": str(uuid.uuid4())},
                "json": {"S": json.dumps(fire)},
                "objectType": {"S": "new_fires"},
                "latitude": {"S": fire.get("latitude")},
                "longitude": {"S": fire.get("longitude")},
            },
        )


def getFires(event, context):
    dynamodb = resource("dynamodb", region_name="eu-west-2")
    table = dynamodb.Table("evacuaid-backend-dev-table")
    fires = table.query(
        IndexName="objectTypeIndex",
        KeyConditionExpression=Key("objectType").eq("new_fires"),
    )
    response = []
    for fire in fires["Items"]:
        response.append(json.loads(fire.get("json")))
    return {
        "statusCode": 200,
        "body": json.dumps(response),
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }
