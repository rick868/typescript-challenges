//1 sum of positives numbers
function sumOfPositives(n: number[]): number {
  let sum: number = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] > 0) {
      sum += n[i];
    }
  }

  return sum;
}
let arr: number[] = [3, 4, -7, 8];
console.log(sumOfPositives(arr));

//2: find maximum value
function findMax(arr: number[]): number {
  let max: number = 0;
  let index1: number = 1;
  for (index1; index1 < arr.length; index1++) {
    if (arr[index1] > max) {
      max = arr[index1];
    }
  }
  return max;
}
const arr1: number[] = [2, 5, 7, 10];
console.log(findMax(arr1));

//3:Election winner
function findWinner(arrayoFObjects: { name: string; votes: number }[]): {
  name: string;
  votes: number;
} {
  let winner = arrayoFObjects[0];
  for (let i = 0; i < arrayoFObjects.length; i++) {
    if (arrayoFObjects[i].votes > winner.votes) {
      winner = arrayoFObjects[i];
    }
  }
  return winner;
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];

console.log(findWinner(candidates));

//4:Longest word
function findLongestWord(LongestWord: string[]): string {
  let long: string = LongestWord[0];
  for (let word in LongestWord) {
    if (LongestWord[word].length > long.length) {
      long = LongestWord[word];
    }
  }
  return long;
}
let words: string[] = ["apple", "banana", "pear", "grapefruit", "john marking"];
console.log(`The length of word  is ${findLongestWord(words)}`);

// 5:count properties
interface count {
  name: string;
  age: number;
}
function countProperties(keyCount: count): number {
  return Object.keys(keyCount).length;
}
let person: count = {
  name: "mark",
  age: 12,
};
console.log(countProperties(person));

//6:filter by length
function filterByLength(arrayLength: string[], minLength: number): string[] {
  return arrayLength.filter((s) => s.length >= minLength);
}
const word: string[] = ["apple", "ovacado", "banana", "cat", "pi"];
console.log("The Wordlist:" + filterByLength(word, 6));

//7:Sum of even numbers
function sumEvenNumbers(evenNumber: number[]): number {
  let sum: number = 0;
  for (let x = 0; x < evenNumber.length; x++) {
    if (evenNumber[x] % 2 == 0) {
      sum += evenNumber[x];
    }
  }
  return sum;
}
let arrs: number[] = [4, 7, 8, 9];
console.log(`sum of all even numbers is ${sumEvenNumbers(arrs)}`);

//8:Difference between sum of even and odd numbers
function differenceOfEvenOdd(diffe: number[]): number {
  let evenSum: number = 0;
  let oddSum: number = 0;
  for (let num of diffe) {
    if (num % 2 == 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  return evenSum - oddSum;
}
let numberlist: number[] = [3, 5, 6, 9, 10];
console.log(differenceOfEvenOdd(numberlist));

//9:Count Truthy
function countTruth(obj: any): number {
  let countvalue: string | number[] = [];
  let count: number = 0;
  for (let key in obj) {
    if (obj[key]) {
      count++;
      countvalue.push(obj[key]);
    }
  }
  console.log(countvalue);
  return count;
}
let truthlist = {
  a: 0,
  b: "hello",
  c: false,
  d: 42,
  e: null,
};

console.log(countTruth(truthlist));

//10:Average of Numbers
function average(avg: number[]): number {
  let sum: number = 0;
  let i: number = 0;

  if (avg.length == 0) {
    return 0;
  }
  while (i < avg.length) {
    sum += avg[i];

    i++;
  }
  let mean: number = sum / avg.length;

  return mean;
}
let numlist: number[] = [3, 5, 6, 9, 10];
console.log("Average is:" + average(numlist));

//11:Linear Search
function linearSearch(linear: number[], target: number): number {
  for (let num in linear) {
    if (linear[num] == target) {
      return linear[num];
    }
  }
  return -1;
}
let list: number[] = [4, 5, 6, 78];
let target = 6;
console.log("The tageted number is:" + linearSearch(list, target));

//12:Recerse Linear Search
function reverseLinearSearch(lastItem: number[], target: number): number {
  {
    return lastItem.lastIndexOf(target);
  }
  return -1;
}
let items: number[] = [5, 4, 6, 8];
let goalitem: number = 4;
console.log(reverseLinearSearch(items, goalitem));

//13:linear Search All indeces
function linearSearchAll(searchAll: number[], targetnum: number): number[] {
  let allIndeces: number[] = [];
  for (let arr = 0; arr < searchAll.length; arr++) {
    if (searchAll[arr] == targetnum) {
      allIndeces.push(arr);
    }
  }
  return allIndeces;
}

let linearAll = [2, 4, 5, 8, 6, 8];
console.log(`Return indices:${linearSearchAll(linearAll, 8)}`);

//14:Count Occurrences
function countOccurrences(arr: any[]): Record<any, number> {
    let obj: Record<any, number> = {};
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if(obj[item] === undefined) {
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }
    }
    return obj;
}
let occurrences = [1, 2, 3, 2, 4, 1, 5];
console.log(countOccurrences(occurrences)); // Expected: { '1': 2, '2': 2, '3': 1, '4': 1, '5': 1 }

//15:Remove Dublicates
function removeDuplicates(duplicates: number[]): number[] {
  let noDuplicate: number[] = [];
  for (let i = 0; i < duplicates.length; i++) {
    if (!noDuplicate.includes(duplicates[i])) {
      noDuplicate.push(duplicates[i]);
    }
  }
  return noDuplicate;
}
let lists: number[] = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates(lists));

//16:Most Frequent
function mostFrequent(arr: any[]): any {
    let count: Record<any, number> = {};
    let maxCount = 0;
    let mostFrequentValue: any = null;

    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if(count[item] === undefined) {
            count[item] = 1;
        } else {
            count[item] += 1;
        }

        if(count[item] > maxCount) {
            maxCount = count[item];
            mostFrequentValue = item;
        }
    }
    return mostFrequentValue;
}
console.log(mostFrequent([1, 2, 3, 2, 4, 1, 5])); // Expected: 2