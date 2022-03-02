"use strict";

//Question 1: max of two numbers
function max(x, y){
    if(x > y) {
        return x;
    }
    else {
        return y;
    }
}

//Question 2: max of three numbers
function maxOfThree(x, y, z){
    return Math.max(x, y, z);
}

//Question 3: a function that returns true if input is a vowel
function isVowel(s) {
    if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
        return true;
    }
    else {
        return false;
    }
}

//Question 4: addition and multiplication functions
function sum(a) {
    let sum = 0;
    for(let i=0; i<a.length; i++){
        sum += a[i];
    }
    return sum;
}

function multiply(a) {
    let product = 1;
    for(let i=0; i<a.length; i++){
        product *= a[i];
    }
    return product;
}

//Question 5: a function that reverses a string
function reverse(s) {
    let s1 = "";
    for(let i=s.length-1; i>=0; i--){
        s1 += s.charAt(i);
    }
    return s1;
}

//Question 6: a function that returns the length of the longest word
function findLongestWord(arr) {
    let longest = "";
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest.length;
}

//Question 7: a function that filters words with length greater than i

//imperative approach
function filterLongWords(wordArr, i) {
    let newArr = new Array();
    for(let j=0; j<wordArr.length; j++){
        if(wordArr[j].length > i){
            newArr[j] = wordArr[j];
        }
    }
    return newArr;
}

//Declarative approach (functional programming)
function filterLongWords(wordArr, i) {
    let newArr = wordArr.filter(w => w.length > i);
    return newArr;
}


//Question 8: sum of squares using functional programming
function computeSumOfSquares(numArr) {
    let sum = numArr.reduce((a, b) => a + b ** 2, 0);
    return sum;
}

//Question 9: a function that prints odd numbers from an array of numbers
function printOddNumbersOnly(numArr) {
    for(let i=0; i<numArr.length; i++) {
        if(numArr[i] % 2 !== 0){
            console.log(numArr[i]);
        }
    }
}

//Question 10: a function that computes sum of squares of even numbers in an array
function computeSumOfSquaresOfEvensOnly(numArr) {
    let sum = numArr.filter(a => a % 2 == 0).reduce((a, b) => a + b ** 2, 0);
    return sum;
}

//Question 11: a function that adds/multiplies values of array using functional programming
function sumFunctional(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum;
}

function multiplyFunctional(arr) {
    let product = arr.reduce((a, b) => a * b, 1);
    return product;
}

//Question 12: find second biggest number in an array
function findSecondBiggest(arr) {
    if(arr.length < 2) {
        console.log("array does not contain two or more numbers");
        return;
    }

    var biggest, secondBiggest;
    biggest = secondBiggest = Number.NEGATIVE_INFINITY;
    arr.forEach((a) => {
        biggest = a > biggest ? a:biggest
    });

    arr.forEach((a) => {
        secondBiggest = a > secondBiggest &&  a < biggest ? a:secondBiggest
    });
    return secondBiggest;
}

//Question 13: a function that prints a fibonacci sequence
function printFibo(x) {
    let arr = [0,1];
    for (let i=2; i<x + 1; i++){
        arr[i] = arr[i-2] + arr[i-1];
    }
    console.log("Fibonacci sequence of " + x + " is " + arr);
}
