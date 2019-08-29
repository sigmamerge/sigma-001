let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitomyPool,
        AttributesToGet: [
            "sub",
            "address",
            "gender",
            "family_name"
        ],
        Limit: 10
    }, function (error, data) {
        if (error) {
            callback(error);
        }
        callback(null, { "message": "Successfully executed..." });
    });
}