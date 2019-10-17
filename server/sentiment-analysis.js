require('dotenv').config();

async function analyzeString(message) {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  const client = new language.LanguageServiceClient();

  const document = {
    content: message,
    type: 'PLAIN_TEXT'
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({ document: document });
  const sentiment = result.documentSentiment;
  return {
      message,
      sentiment
  }
};

module.exports = analyzeString;