let array = [10, 20, 45, 30, 77, 60];
let count = 0;
for (const element of array) {
  if (element % 2 == 1) {
    count = count + 1;
  }
}
console.log(count);

const myLove = "I love only javaScript";
const vowels = "aeiou";
let countVowels = 0;
for (const char of myLove) {
  if (vowels.includes(char.toLowerCase())) {
    countVowels = countVowels + 1;
  }
}
console.log(countVowels);

const sentence = "JavaScript Language";
let countA = 0;
for (const char of sentence) {
  if (char.toLowerCase() == "a") countA = countA + 1;
}
console.log(` A is available in string is: ${countA} `);
