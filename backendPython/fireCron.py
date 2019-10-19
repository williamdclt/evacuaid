import csv
from io import StringIO
from urllib.request import Request, urlopen


def eventCreater(event, context):
    try:
        request = Request(
            "https://nrt4.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/viirs/USA_contiguous_and_Hawaii/VIIRS_I_USA_contiguous_and_Hawaii_VNP14IMGTDL_NRT_2019232.txt"
        )
        request.add_header(
            "Authorization", "Bearer E2243090-F269-11E9-99F5-4EF3207B60E0"
        )
        response = urlopen(request)
        csv_file = StringIO(response.read().decode("utf-8"))
        csv_reader = csv.DictReader(csv_file, skipinitialspace=True)
        for row in csv_reader:
            print(row)
    except Exception as err:
        print(err)
