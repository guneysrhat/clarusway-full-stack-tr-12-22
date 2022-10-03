console.log('app js Running');

// let a = 5;
// console.log(a);
// {
//     a = 3;
//     console.log(a);
// }

// console.log(a);

// console.log(typeof 0);
// console.log(typeof 3.14);
// console.log(typeof 'Hello');
// console.log(typeof (8 > 18));
// console.log(8 > 10);
// console.log(typeof '');

// let b = +prompt('bir sey giriniz');

// console.log(b, typeof b);

// let age;

// console.log(age);

// console.log(myAge);

// var myAge = 40;
// var myAge1 = 40;
// var myAge2 = 40;
// var myAge3 = 40;
// var myAge4 = 40;

// console.log('hello');


// let a = null


// console.log(typeof a);

// let x;

// do {
//     x = prompt('enter a Number :');
// } while (isNaN(x));
// console.log(x, x * x);


//  let a = null

// console.log( typeof a)


// let x;

// do {
//      x = prompt('enter a Number : ');
// }while (isNaN(x));

// console.log(x, x*x) 

// console.log('12' === 12)

// console.log('12' * '12')

// let x = 123456789001234
// let y = 123456789001234123

// let z = 0.12345678901234567
// let zz = 0.123456789012345675678

// console.log({x})
// console.log({y},typeof y)

// console.log(z)
// console.log(zz)

// let g = 0.1+0.2
// console.log(g)
// console.log(+g.toFixed(2))

// let h = 1_000_000_000

// console.log(h)


// let i = 'This "is "a\' """""s"""""tring';
// let j = "This '''''i''s a\" string";
// let k = `This is a string`;

// console.log(i,typeof i)
// console.log(j,typeof j)
// console.log(k,typeof k)



// let userName = 'Musa  ';
// console.log(userName)

// console.log('Merhaba ', userName )

// console.log(`Merhaba ${userName}`)

// console.log(`2 + 3 = ${2 +'3'}`)

// console.log('3'- 2)


let m = ``
let n = ' '
let p = 0

console.log(Boolean(m));
console.log(Boolean(n));
console.log(Boolean(p));
console.log(Boolean(3 < 5));
console.log(Boolean(5 < 3));

const myCar = {
    make: 'ford',
    model: 'Mustang',
    year: 1965,
    color: 'Black'
}

console.log(myCar)

myCar.color = 'green'

console.log(myCar)

//   myCar = 'ford'

myCar.sunRoof = false;

console.log(myCar)

myCar.age = function (current) {
    console.log(current - this.year)
}

myCar.age(2010)
