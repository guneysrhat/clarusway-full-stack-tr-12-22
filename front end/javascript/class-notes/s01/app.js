console.log('app.js is running');

// let firstName = prompt('Enter your name:');
// alert('firstName :' + firstName);
// console.log(firstName);

let sonuc = confirm('are you lagal');
console.log(sonuc);

// function scope

function myFunction() {
    var myNumbrr = 42
    // code here can use
}

// code can not here can  not use



// block scope
// var
function fn(num) {
    if (num < 5) {
        var newNum = 5;
    }
    // newNum Can be accessed here
}

//let
function fn(num) {
    if (num < 5) {
        let newNum = 5;
    }
    //newNum can Not be accessed here
}


var myNumber1 = 11;
console.log(myNumber1);
let v1 = 55;
console.log(v1);
/*
some functions





*/

var myNumber1 = 22;
console.log(myNumber1);
v2 = 88;
console.log(v2);


//  ! const

const student = {
    name: 'Nedim',
    age: 34,
};

const otherStudent = student;
otherStudent.name = 'Dan Brown';

console.log(student);
console.log(otherStudent);


// ? primitive ornek

let num1 = 501;

let num2 = 467;

num1 = num2;

num2 = num2 + 3;
console.log(num1, num2);