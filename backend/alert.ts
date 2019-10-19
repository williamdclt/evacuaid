const accountSid = process.env.TwilioSidToken;
const authToken = process.env.TwilioAuthToken;
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    url: process.env.TwilioScriptUrl,
    to: process.env.TwilioTestNumber,
    from: process.env.TwilioOutNumber,
    method: 'GET',
  })
  .then(call => console.log(call.sid))
  .catch(e => console.log(e));
