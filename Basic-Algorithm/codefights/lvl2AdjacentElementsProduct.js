function adjacentElementsProduct(inputArray) {

    var largestCombo = inputArray[0] * inputArray[1];

    for( var i = 1; i < inputArray.length -1; i++) {
        var newNum = inputArray[i] * inputArray[i + 1];
        if( newNum > largestCombo ){
            largestCombo = newNum;
        }
    }
    return largestCombo;
}


module.exports = adjacentElementsProduct;

// @learnings:
// Best to start the comparative number with live values from sample array.
// Count the iteration loops to ensure to not over run.
// .length !not .length() @question: which means .length is not a method?
