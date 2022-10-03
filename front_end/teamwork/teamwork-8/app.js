var Storm = function () {};
Storm.prototype.precip = "rain";
var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = "snow";
var bob = new WinterStorm();
console.log(bob.precip);
console.log(WinterStorm);

function sayHello() {
    console.log('hello');
    }
    console.log(sayHello.prototype);