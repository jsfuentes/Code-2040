var request = require('request');

request.post(
    'http://challenge.code2040.org/api/prefix',
    { json: { token: '9b4d1e618c18156fe833ae53eeac221b'} },
    function (error, response, body) {
        if (!error) {
          var newArray = body.array.filter(
            function(curVal) {
                return curVal.substr(0, body.prefix.length) != body.prefix
              }
            );
          console.log(newArray);
          request.post(
            'http://challenge.code2040.org/api/prefix/validate',
            { json: { token: '9b4d1e618c18156fe833ae53eeac221b',
                      array: newArray } },
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
