import { success, failure, Event } from './libs/response';
import { APIGatewayProxyResult } from 'aws-lambda';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import GetItemInput = DocumentClient.GetItemInput;

export const main = async (event: Event): Promise<APIGatewayProxyResult> => {
  if (!process.env.tableName) {
    throw new Error('env.tableName must be defined');
  }
  const params: GetItemInput = {
    TableName: process.env.tableName,
    Key: {
      username: event.requestContext.authorizer.claims['cognito:username'],
      uuid: event.pathParameters.id,
    },
  };

  try {
    const dynamoDb = new DynamoDB.DocumentClient();
    const result = await dynamoDb.get(params).promise();
    if (result.Item) {
      return success(result.Item);
    } else {
      return failure({ status: false, error: 'Item not found.' });
    }
  } catch (e) {
    return failure({ status: false, error: e.message });
  }
};
