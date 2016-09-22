var request = require('request');

request.post(
    'http://challenge.code2040.org/api/register',
    { json: { github: 'https://github.com/jsfuentes/Code-2040.git',
              token: '9b4d1e618c18156fe833ae53eeac221b'} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
