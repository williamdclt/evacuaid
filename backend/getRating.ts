import { success, failure } from './libs/response';
import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import fetch from 'node-fetch';

export const main = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const url = 'https://evacuaid-nasa.s3.eu-west-2.amazonaws.com/data.json';

    const data = event.queryStringParameters;
    let rating: number = 0;
    if (!data) {
      return success({ rating: 0});
    }
    const location = `${Math.round(parseFloat(data.latitude))},${Math.round(parseFloat(data.longitude))}`;
    const response = await fetch(url);
    const json = await response.json();
    rating = json[location] ? json[location].score : 0;

    return success({ rating: rating });
  } catch (e) {
    return failure({ status: false, error: e.message });
  }
};
