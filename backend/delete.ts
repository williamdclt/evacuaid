import { success, failure, Event } from './libs/response';
import { APIGatewayProxyResult } from 'aws-lambda';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import DeleteItemInput = DocumentClient.DeleteItemInput;

export const main = async (event: Event): Promise<APIGatewayProxyResult> => {
  if (!process.env.tableName) {
    throw new Error('env.tableName must be defined');
  }

  const params: DeleteItemInput = {
    TableName: process.env.tableName,
    Key: {
      username: event.requestContext.authorizer.claims['cognito:username'],
      uuid: event.pathParameters.id,
    },
  };

  try {
    const dynamoDb = new DynamoDB.DocumentClient();
    await dynamoDb.delete(params).promise();
    return success({ status: true });
  } catch (e) {
    return failure({ status: false, error: e.message });
  }
};
