var numbers = [4, 6, 8];

var findSum = numbers.reduce(function (findSum, number) {
  return findSum + number;
}, 0);

console.log(findSum);


const letters = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']

const findFrequency = letters.reduce((acc, val) => ({...acc, [val]: (acc[val] || 0) + 1}), {});
const leastFrequency = Math.min(...Object.values(findFrequency));
const least = Object.keys(findFrequency).find(el=>findFrequency[el]===leastFrequency);
const mostFrequency = Math.max(...Object.values(findFrequency));
const most = Object.keys(findFrequency).find(el=>findFrequency[el]===mostFrequency);

console.log(`most: '${most}', least: '${least}`);



let isPalindrome = function (word) {
   let length = word.length;
   let start = word.substring(0, Math.floor(length/2)).toLowerCase();
   let end = word.substring(length - Math.floor(length/2)).toLowerCase();
    let flip = end.split('').reverse().join('');
    return (start === flip);
};

console.log(isPalindrome('radar'));



const numbers = [9, 5, 10, 2, 24, -1, -48];

function largestPair(array) {
    let maxProduct = array[0] * array[1];
    for (let i = 1; i < array.length; i++) {
  
      product = array[i] * array[i + 1];
  
      if (product > maxProduct)
        maxProduct = product; 
    
    }
    return maxProduct;
};
console.log(largestPair(numbers));



var string = ('ido(not)liketocode');

var removeParenth = string.replace('(not)','');

console.log(removeParenth)


const scoreKey = letter => {
        const scoreTable = {
            aeioulnrst: 1,
            dg: 2,
            bcmp: 3,
            fhvwy: 4,
            k: 5,
            jx: 8,
            qz: 10
        };
        for (const s in scoreTable) {
            if (s.includes(letter)) {
                return scoreTable[s];
            }
        }
        return 0;
    };

    var scoreScrabble = word =>
        word.toLowerCase().split('').reduce((acc, curr) => {
                return acc + scoreKey(curr);
            }, 0);
    
console.log(scoreScrabble ('make'));
