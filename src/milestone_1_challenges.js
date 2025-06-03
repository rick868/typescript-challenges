"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = addition;
exports.convert = convert;
exports.findPerimeter = findPerimeter;
exports.checkNegative = checkNegative;
exports.canDrive = canDrive;
exports.findLargest = findLargest;
exports.calculateBMI = calculateBMI;
exports.greetUser = greetUser;
exports.fizzBuzzCheck = fizzBuzzCheck;
exports.perimeter = perimeter;
exports.sumEvenNumbers = sumEvenNumbers;
exports.powerUp = powerUp;
exports.factorial = factorial;
exports.sumMultiples = sumMultiples;
exports.sumDigits = sumDigits;
// Challenge 1: Sum of two numbers
function addition(a, b) {
    return a + b;
}
console.log(addition(3, 5)); // Expected: 8
console.log('  addition(-6, 9):', addition(-6, 9));
// Challenge 2: Convert Minutes into Seconds
function convert(minutes) {
    return minutes * 60;
}
// Challenge 3: Perimeter of a Rectangle
function findPerimeter(length, width) {
    return 2 * (length + width);
}
// Challenge 4: Check Negative
function checkNegative(num) {
    return num < 0;
}
// Challenge 5: Can I Drive
function canDrive(name, age) {
    if (age >= 18) {
        return "".concat(name, " is old enough to drive.");
    }
    else {
        return "".concat(name, " is not old enough to drive yet.");
    }
}
// Challenge 6: Largest Number
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
// Challenge 7: BMI Calculator
function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    var category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    }
    else {
        category = 'Obese';
    }
    return "Your BMI is ".concat(bmi.toFixed(1), " - ").concat(category);
}
// Challenge 8: Greeting Based On Time
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        return "Good morning, ".concat(name, "!");
    }
    else if (hour >= 12 && hour <= 17) {
        return "Good afternoon, ".concat(name, "!");
    }
    else if (hour >= 18 && hour <= 21) {
        return "Good evening, ".concat(name, "!");
    }
    else {
        return "Good night, ".concat(name, "!");
    }
}
// Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (number % 3 === 0) {
        return 'Fizz';
    }
    else if (number % 5 === 0) {
        return 'Buzz';
    }
    else {
        return number.toString();
    }
}
// Challenge 10: Perimeter 2
function perimeter(letter, num) {
    if (letter === 's') {
        return 4 * num;
    }
    else if (letter === 'c') {
        return 6.28 * num;
    }
    else {
        throw new Error('Invalid shape letter. Use "s" for square or "c" for circle.');
    }
}
// Challenge 11: Sum of Even Numbers
function sumEvenNumbers(n) {
    var sum = 0;
    for (var i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
// Challenge 12: Multiply by Itself
function powerUp(num, times) {
    if (times === 0)
        return 1;
    var result = 1;
    for (var i = 0; i < times; i++) {
        result *= num;
    }
    return result;
}
// Challenge 13: Factorial Calculator
function factorial(n) {
    if (n === 0)
        return 1;
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Challenge 14: Multiple Sum
function sumMultiples(n, divisor) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sum += i;
        }
    }
    return sum;
}
// Challenge 15: Sum of Digits
function sumDigits(num) {
    var sum = 0;
    var number = num;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
