"use strict";

function Bicycle(gear,speed){
    this.gear = gear;
    this.speed = speed;

    this.applyBrake = function(decrease){
        this.speed -= decrease;
    }

    this.speedUp = function(increase){
        this.speed += increase;
    }
}

function adjustSeat(value){
    this.seatHeight = value;
}

let bicycle = new Bicycle(0, 1);
console.log(bicycle);

let mountainBike = new Object();
mountainBike.__proto__= bicycle;
mountainBike.gear =3;
mountainBike.speed =2;
mountainBike.seatHeight =1;
mountainBike.prototype.adjustSeat = mountainBike.adjustSeat;

console.log(mountainBike)
mountainBike.speedUp(100);
mountainBike.applyBrake(10);
console.log("92:" + mountainBike.speed);
console.log("3:" + mountainBike.gear);