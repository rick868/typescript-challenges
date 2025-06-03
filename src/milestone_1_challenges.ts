// Challenge 1: Sum of two numbers
export function addition(a: number,b: number): number {
    return a + b;
}

console.log(addition(3, 5)); // Expected: 8
console.log(addition(-6, 9)); // Expected: 3

// Challenge 2: Convert Minutes into Seconds
export function convert(minutes: number): number {
    return minutes * 60;
}
console.log(convert(5)); // Expected: 300

// Challenge 3: Perimeter of a Rectangle
export function findPerimeter(length: number, width: number): number {
    return 2 * (length + width);
}
console.log(findPerimeter(6, 7)); // Expected: 26
// Challenge 4: Check Negative
export function checkNegative(num: number): boolean {
    return num < 0;
}
console.log(checkNegative(-5)); // Expected: true
console.log(checkNegative(3)); // Expected: false

// Challenge 5: Can I Drive
export function canDrive(name: string, age: number): string {
    if (age >= 18) {
        return `${name} is old enough to drive.`;
    } else {
        return `${name} is not old enough to drive yet.`;
    }
}
console.log(canDrive("Alice", 20)); // Expected: "Alice is old enough to drive."
console.log(canDrive("Bob", 16)); // Expected: "Bob is not old enough to drive yet."


// Challenge 6: Largest Number
export function findLargest(a: number, b: number, c: number): number {
    return Math.max(a, b, c);
}
console.log(findLargest(5, 10, 3)); // Expected: 10
console.log(findLargest(-1, -5, -3)); // Expected: -1

// Challenge 7: BMI Calculator
export function calculateBMI(weight: number, height: number): string {
    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    return `Your BMI is ${bmi.toFixed(1)} - ${category}`;
}
console.log(calculateBMI(70, 1.75)); // Expected: "Your BMI is 22.9 - Normal weight"


// Challenge 8: Greeting Based On Time
export function greetUser(name: string, hour: number): string {
    if (hour >= 5 && hour <= 11) {
        return `Good morning, ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
        return `Good afternoon, ${name}!`;
    } else if (hour >= 18 && hour <= 21) {
        return `Good evening, ${name}!`;
    } else {
        return `Good night, ${name}!`;
    }
}
console.log(greetUser("Alice", 10)); // Expected: "Good morning, Alice!"
console.log(greetUser("Bob", 15)); // Expected: "Good afternoon, Bob!"


// Challenge 9: FizzBuzz
export function fizzBuzzCheck(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number.toString();
    }
}
console.log(fizzBuzzCheck(15)); // Expected: "FizzBuzz"
console.log(fizzBuzzCheck(9)); // Expected: "Fizz"


// Challenge 10: Perimeter 2
export function perimeter(letter: string, num: number): number {
    if (letter === 's') {
        return 4 * num;
    } else if (letter === 'c') {
        return 6.28 * num;
    } else {
        throw new Error('Invalid shape letter. Use "s" for square or "c" for circle.');
    }
}   

console.log(perimeter('s', 5)); // Expected: 20
console.log(perimeter('c', 3)); // Expected: 18.84



// Challenge 11: Sum of Even Numbers
export function sumEvenNumbers(n: number): number {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

// Challenge 12: Multiply by Itself
export function powerUp(num: number, times: number): number {
    if (times === 0) return 1;
    let result = 1;
    for (let i = 0; i < times; i++) {
        result *= num;
    }
    return result;
}

// Challenge 13: Factorial Calculator
export function factorial(n: number): number {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Challenge 14: Multiple Sum
export function sumMultiples(n: number, divisor: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sum += i;
        }
    }
    return sum;
}

// Challenge 15: Sum of Digits
export function sumDigits(num: number): number {
    let sum = 0;
    let number = num;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
