import { APIGatewayProxyResult } from 'aws-lambda';
import * as uuid from 'uuid';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import PutItemInput = DocumentClient.PutItemInput;
import { success, failure, Event } from './libs/response';

export const main = async (event: Event): Promise<APIGatewayProxyResult> => {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data: { content: string } = JSON.parse(event.body);

  if (!process.env.tableName) {
    throw new Error('env.tableName must be defined');
  }

  const params: PutItemInput = {
    TableName: process.env.tableName,
    Item: {
      username: event.requestContext.authorizer.claims['cognito:username'],
      uuid: uuid.v1(),
      content: data.content,
      createdAt: Date.now(),
    },
  };

  try {
    const dynamoDb = new DynamoDB.DocumentClient();
    await dynamoDb.put(params).promise();
    return success(params.Item);
  } catch (e) {
    return failure({ status: false, error: e.message });
  }
};
