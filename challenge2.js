var request = require('request');

function reverse(word){
  var newStr = "";
  for(var i = word.length - 1; i >= 0; i--)
    newStr += word[i];
  return newStr;
}

request.post(
    'http://challenge.code2040.org/api/reverse',
    { json: { token: '9b4d1e618c18156fe833ae53eeac221b'} },
    function (error, response, body) {
        if (!error) {
          request.post(
            'http://challenge.code2040.org/api/reverse/validate',
            { json: { token: '9b4d1e618c18156fe833ae53eeac221b',
                      string: reverse(body)} },
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
