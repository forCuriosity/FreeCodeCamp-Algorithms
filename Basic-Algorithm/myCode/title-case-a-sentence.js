/*
Challenge: 'Title Case a Sentence'
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.",
For the purpose of this exercise, you should also capitalize connecting words like \"the\" and \"of\".",
Remember to use <a href=\"http://forum.freeCodeCamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
*/
var titleCase = function(str) {

 var array =  str.toLowerCase().split(' ');
 var capitalized = '';

  for(var i =0; i < array.length; i++){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  capitalized = array.join(' ');

  return capitalized;

};

module.exports = titleCase;
