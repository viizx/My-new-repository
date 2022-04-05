/* 
In this Kata, you will be given an array of strings and your task is to 
remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

function dup(s) {
  let arr = [];
  s.forEach((element) => {
    let word = element.split("");
    let newWord = [];
    for (let i = 0; i < element.length; i++) {
      if (word[i] !== word[i - 1]) {
        newWord.push(word[i]);
      }
    }
    arr.push(newWord.join(""));
  });
  return arr;
}
