// 1. Check if the number is even or odd
function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

evenOrOdd(7);


// 2. Print the larger number
function largerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

largerNumber(10, 20);


// 3. Calculate age from birth year
function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    console.log(age);
}

calculateAge(2005);


// 4. Print odd numbers from 1 to the given number
function printOddNumbers(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOddNumbers(10);


// 5. Calculate the sum from 1 to the given number
function calculateSum(number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }

    console.log(sum);
}

calculateSum(5);