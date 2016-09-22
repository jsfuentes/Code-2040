var request = require('request');

request.post(
    'http://challenge.code2040.org/api/dating',
    { json: { token: '9b4d1e618c18156fe833ae53eeac221b'} },
    function (error, response, body) {
      var year = body.datestamp.substring(0,4);
      var month = body.datestamp.substring(5,7) - 1;
      var day = body.datestamp.substring(8,10);
      var hour = body.datestamp.substring(11,13);
      var minutes = body.datestamp.substring(14,16);
      var seconds = body.datestamp.substring(17,19);
      var answer = new Date(Date.UTC(year, month, day, hour, minutes, seconds) + body.interval*1000);
      //Dates can be creates as # of milliseconds since some benchmark
      console.log(body.datestamp, "\n", Date.UTC(year, month, day, hour, minutes, seconds))
      console.log("\n", body.interval, "\n", answer, answer.toISOString().substr(0, 19) + 'Z');
        if (!error) {
          request.post(
            'http://challenge.code2040.org/api/dating/validate',
            { json: { token: '9b4d1e618c18156fe833ae53eeac221b',
                      datestamp: answer.toISOString().substr(0, 19) + 'Z' } },
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
