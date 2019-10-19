import { success } from './libs/response';

const accountSid = process.env.TwilioSidToken;
const authToken = process.env.TwilioAuthToken;

const client = require('twilio')(accountSid, authToken);

export const main = async (event: any): Promise<any> => {
  console.log(event);
  return client.calls
    .create({
      url: process.env.TwilioScriptUrl,
      to: process.env.TwilioTestNumber,
      from: process.env.TwilioOutNumber,
      method: 'GET',
    })
    .then((call: any) => success(call.sid))
    .then(() => {
      return client.messages
        .create({ body: 'Crisis Alert: Fire in your area - go to Hursley Park Rd, Hursley, Winchester SO21 2JN', from: process.env.TwilioOutNumber, to: process.env.TwilioTestNumber })
        .then((message: any) => console.log(message.sid));
    })
    .catch((e: any) => console.log(e));
};
