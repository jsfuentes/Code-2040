var request = require('request');

request.post(
    'http://challenge.code2040.org/api/haystack',
    { json: { token: '9b4d1e618c18156fe833ae53eeac221b'} },
    function (error, response, body) {
        if (!error) {
          console.log(body);
          console.log(body.haystack.indexOf(body.needle));
          request.post(
            'http://challenge.code2040.org/api/haystack/validate',
            { json: { token: '9b4d1e618c18156fe833ae53eeac221b',
                      needle: body.haystack.indexOf(body.needle) } },
            function(error, response, body){
              if(!error){
                console.log(body);
              }
              else {
                console.log(error);
              }
            }
          )
        }
        else {
          console.log(error);
        }
      }
    )
