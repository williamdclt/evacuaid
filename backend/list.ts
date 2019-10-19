import { success, failure, Event } from './libs/response';
import { APIGatewayProxyResult } from 'aws-lambda';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import QueryInput = DocumentClient.QueryInput;

export const main = async (event: Event): Promise<APIGatewayProxyResult> => {
  if (!process.env.tableName) {
    throw new Error('env.tableName must be defined');
  }
  const params: QueryInput = {
    TableName: process.env.tableName,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': event.requestContext.authorizer.claims['cognito:username'],
    },
  };

  try {
    const dynamoDb = new DynamoDB.DocumentClient();
    const result = await dynamoDb.query(params).promise();
    if (result.Items) {
      return success(result.Items);
    }
    return failure({
      status: false,
      error: result.$response.error
        ? result.$response.error.toString()
        : 'Unknown error',
    });
  } catch (e) {
    return failure({ status: false, error: e });
  }
};
