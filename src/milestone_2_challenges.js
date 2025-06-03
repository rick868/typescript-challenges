//1 sum of positives numbers
function sumOfPositives(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i] > 0) {
            sum += n[i];
        }
    }
    return sum;
}
var arr = [3, 4, -7, 8];
console.log(sumOfPositives(arr));
//2: find maximum value
function findMax(arr) {
    var max = 0;
    var index1 = 1;
    for (index1; index1 < arr.length; index1++) {
        if (arr[index1] > max) {
            max = arr[index1];
        }
    }
    return max;
}
var arr1 = [2, 5, 7, 10];
console.log(findMax(arr1));
//3:Election winner
function findWinner(arrayoFObjects) {
    var winner = arrayoFObjects[0];
    for (var i = 0; i < arrayoFObjects.length; i++) {
        if (arrayoFObjects[i].votes > winner.votes) {
            winner = arrayoFObjects[i];
        }
    }
    return winner;
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
];
console.log(findWinner(candidates));
//4:Longest word
function findLongestWord(LongestWord) {
    var long = LongestWord[0];
    for (var word_1 in LongestWord) {
        if (LongestWord[word_1].length > long.length) {
            long = LongestWord[word_1];
        }
    }
    return long;
}
var words = ["apple", "banana", "pear", "grapefruit", "john marking"];
console.log("The length of word  is ".concat(findLongestWord(words)));
function countProperties(keyCount) {
    return Object.keys(keyCount).length;
}
var person = {
    name: "mark",
    age: 12,
};
console.log(countProperties(person));
//6:filter by length
function filterByLength(arrayLength, minLength) {
    return arrayLength.filter(function (s) { return s.length >= minLength; });
}
var word = ["apple", "ovacado", "banana", "cat", "pi"];
console.log("The Wordlist:" + filterByLength(word, 6));
//7:Sum of even numbers
function sumEvenNumbers(evenNumber) {
    var sum = 0;
    for (var x = 0; x < evenNumber.length; x++) {
        if (evenNumber[x] % 2 == 0) {
            sum += evenNumber[x];
        }
    }
    return sum;
}
var arrs = [4, 7, 8, 9];
console.log("sum of all even numbers is ".concat(sumEvenNumbers(arrs)));
//8:Difference between sum of even and odd numbers
function differenceOfEvenOdd(diffe) {
    var evenSum = 0;
    var oddSum = 0;
    for (var _i = 0, diffe_1 = diffe; _i < diffe_1.length; _i++) {
        var num = diffe_1[_i];
        if (num % 2 == 0) {
            evenSum += num;
        }
        else {
            oddSum += num;
        }
    }
    return evenSum - oddSum;
}
var numberlist = [3, 5, 6, 9, 10];
console.log(differenceOfEvenOdd(numberlist));
//9:Count Truthy
function countTruth(obj) {
    var countvalue = [];
    var count = 0;
    for (var key in obj) {
        if (obj[key]) {
            count++;
            countvalue.push(obj[key]);
        }
    }
    console.log(countvalue);
    return count;
}
var truthlist = {
    a: 0,
    b: "hello",
    c: false,
    d: 42,
    e: null,
};
console.log(countTruth(truthlist));
//10:Average of Numbers
function average(avg) {
    var sum = 0;
    var i = 0;
    if (avg.length == 0) {
        return 0;
    }
    while (i < avg.length) {
        sum += avg[i];
        i++;
    }
    var mean = sum / avg.length;
    return mean;
}
var numlist = [3, 5, 6, 9, 10];
console.log("Average is:" + average(numlist));
//11:Linear Search
function linearSearch(linear, target) {
    for (var num in linear) {
        if (linear[num] == target) {
            return linear[num];
        }
    }
    return -1;
}
var list = [4, 5, 6, 78];
var target = 6;
console.log("The tageted number is:" + linearSearch(list, target));
//12:Recerse Linear Search
function reverseLinearSearch(lastItem, target) {
    {
        return lastItem.lastIndexOf(target);
    }
    return -1;
}
var items = [5, 4, 6, 8];
var goalitem = 4;
console.log(reverseLinearSearch(items, goalitem));
//13:linear Search All indeces
function linearSearchAll(searchAll, targetnum) {
    var allIndeces = [];
    for (var arr_1 = 0; arr_1 < searchAll.length; arr_1++) {
        if (searchAll[arr_1] == targetnum) {
            allIndeces.push(arr_1);
        }
    }
    return allIndeces;
}
var linearAll = [2, 4, 5, 8, 6, 8];
console.log("Return indices:".concat(linearSearchAll(linearAll, 8)));
//14:Count Occurrences
function countOccurrences(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (obj[item] === undefined) {
            obj[item] = 1;
        }
        else {
            obj[item] += 1;
        }
    }
    return obj;
}
var occurrences = [1, 2, 3, 2, 4, 1, 5];
console.log(countOccurrences(occurrences)); // Expected: { '1': 2, '2': 2, '3': 1, '4': 1, '5': 1 }
//15:Remove Dublicates
function removeDuplicates(duplicates) {
    var noDuplicate = [];
    for (var i = 0; i < duplicates.length; i++) {
        if (!noDuplicate.includes(duplicates[i])) {
            noDuplicate.push(duplicates[i]);
        }
    }
    return noDuplicate;
}
var lists = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates(lists));
//16:Most Frequent
function mostFrequent(arr) {
    var count = {};
    var maxCount = 0;
    var mostFrequentValue = null;
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (count[item] === undefined) {
            count[item] = 1;
        }
        else {
            count[item] += 1;
        }
        if (count[item] > maxCount) {
            maxCount = count[item];
            mostFrequentValue = item;
        }
    }
    return mostFrequentValue;
}
console.log(mostFrequent([1, 2, 3, 2, 4, 1, 5])); // Expected: 2
