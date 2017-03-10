
var largestNums = function (arrays) {

  var arraysOfBigBoys = [];

  for(var i=0; i < arrays.length; i++) {
    // Iterate over each element group

    var lnum = 0;

    for(var j=0; j < arrays[i].length; j++) {
      // Iterate over each number inside the element group

      if(lnum < arrays[i][j]) {

        lnum = arrays[i][j]

      }
    }
    arraysOfBigBoys.push(lnum)
  }
  console.log(arraysOfBigBoys)
  return arraysOfBigBoys;
}

module.exports = largestNums;
