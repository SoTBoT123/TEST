// discordProxy.js

exports.handler = async function (event, context) {
  try {
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1198440577243562025/acRApUkq4kR5ZHu8Wg-I66sWO17mX3mdxDq-_DmvE-VRtwcwk7I8plmt9U8EyFLXvQA1';
    const requestBody = JSON.parse(event.body);

    const response = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    return {
      statusCode: response.status,
      body: JSON.stringify({ message: 'Request forwarded to Discord webhook.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error.' }),
    };
  }
};
