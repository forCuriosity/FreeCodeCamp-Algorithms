/* Bonfire: Find the Longest Word in a String
Difficulty 1/5
Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
String.split() String.length

http://www.freecodecamp.com/
*/


function findLongestWord(str) {


var wordsArray = str.split(" ");
var longestWord = 0;

  for(i=0; i < wordsArray.length; i++){
    if(wordsArray[i].length > longestWord){
      longestWord = wordsArray[i].length;
    }
  }


  return longestWord;

}

findLongestWord("The quick brown fox jumped over the lazy dog");
