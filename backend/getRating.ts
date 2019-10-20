import { success, failure } from './libs/response';
import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import fetch from 'node-fetch';

export const main = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const dataUrl = 'https://evacuaid-nasa.s3.eu-west-2.amazonaws.com/data.json';

    const data = event.queryStringParameters;
    let rating: number = 0;
    if (!data || !data.address) {
      return success({ rating: 0});
    }

    const address = data.address;
    const mapUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA22cO0nzoh_7qD1UFeBK4aa4tgf_rPyvY`

    const locationResponse = await fetch(mapUrl)
    const locationJson = await locationResponse.json()
    if (!locationJson || !locationJson.results) {
      return success({ rating: 0});
    }

    const latitude = locationJson.results[0].geometry.location.lat;
    const longitude = locationJson.results[0].geometry.location.lng;

    const location = `${Math.round(parseFloat(latitude))},${Math.round(parseFloat(longitude))}`;
    const response = await fetch(dataUrl);
    const json = await response.json();
    rating = json[location] ? json[location].score : 0;

    return success({ rating: rating });
  } catch (e) {
    return failure({ status: false, error: e.message });
  }
};
