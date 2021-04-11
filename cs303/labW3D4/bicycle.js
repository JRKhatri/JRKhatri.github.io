
 const bicycle = {
     gear : 1,
     speed : 0,
     applyBrake: function(decrement){
         this.speed -= decrement;
     },
     speedUp: function(increment){
         this.speed += increment;
     }
 }
    
let mountainBike = {
__proto__:bicycle,
seatHeight : 2,

adjustSeat : function(newHeight){
 this.seatHeight = newHeight;
}
};


//mountainBike.gear =3;
//mountainBike.speed =2;
 
// console.log(bicycle)
// console.log(mountainBike);
// mountainBike.speedUp(100);
// mountainBike.applyBrake(10);
// console.log("92:" + mountainBike.speed);
// console.log("3:" + mountainBike.gear);


// module.exports = {mountainBike}; //add all of your function names here that you need for the node mocha tests



