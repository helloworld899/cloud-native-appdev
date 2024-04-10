const env = require('env-var');
const { request } = require('express');

const port = env.get('PORT').default('80').asPortNumber();

// TODO Exercise 4: Parse and export the name of the topic
// ...
const {
    requestTopic
} = JSON.parse(process.env.COPILOT_SNS_TOPIC_ARNS);

module.exports = {
    port,
    requestTopic
};