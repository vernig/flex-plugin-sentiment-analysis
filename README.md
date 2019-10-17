# Twilio Flex plugin for sentiment analysis on chat 

This plugin is using [Google Cloud Natural Language API for sentiment analysis](https://cloud.google.com/natural-language/docs/analyzing-sentiment)


# Quickstart

* Copy `plugin-sentiment/public/appConfig.example.js` in `appConfig.js` adding a value for the `accountSid` variable (this is the Twilio Accouint Sid for your Twilio Flex instance)
* Copy `plugin-sentiment/src/components/SentimentMessageBubble/config.example.js` in `config.js` specifying the value of your server in `SERVER_URL`(see below) 
* Generate a service account credential json file from Google Cloud and place it in `server/google-creds.json`
* Run `npm install` in both `plugin-sentiment` and `server`
* Start the server running `npm start` in `server` folder. If needed, run the tunnel to port `8080`. This is the server address you need to put in `SERVER_URL`
* Execute `npm start` from `plugin-sentiment`
* Start chatting... 

