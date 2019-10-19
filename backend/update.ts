import { success, failure, Event } from './libs/response';
import { APIGatewayProxyResult } from 'aws-lambda';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import UpdateItemInput = DocumentClient.UpdateItemInput;

export const main = async (event: Event): Promise<APIGatewayProxyResult> => {
  const data = JSON.parse(event.body);

  if (!process.env.tableName) {
    throw new Error('env.tableName must be defined');
  }

  const params: UpdateItemInput = {
    TableName: process.env.tableName,
    Key: {
      username: event.requestContext.authorizer.claims['cognito:username'],
      uuid: event.pathParameters.id,
    },

    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: 'SET content = :content',
    ExpressionAttributeValues: {
      ':content': data.content || null,
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: 'ALL_NEW',
  };

  try {
    const dynamoDb = new DynamoDB.DocumentClient();
    const updatedItem = await dynamoDb.update(params).promise();
    return success(updatedItem);
  } catch (e) {
    return failure({ status: false, error: e.message });
  }
};
