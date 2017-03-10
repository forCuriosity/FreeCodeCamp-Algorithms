var express = require('express');
var app = express();

var capsSentence = require('./myCode/title-case-a-sentence.js')('sHoRt AnD sToUt');
var largestNums = require('./myCode/return-largest-numbers-in-arrays.js')([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


app.get('/', function (req, res) {
  res.send(
    'by: Aaron Schleichkorn @freeCodeCamp<br>' +
    '<h3>results from javascript alogrithem challenges:</h3><br><br>' +
    'Capitalize Just First Letter Of Each Word = ' + capsSentence + '<br>' +
    'Return largest number in each array = ' + largestNums + '<br>' +
    're'
  );
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
