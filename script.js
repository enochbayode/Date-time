// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
// }

// document.getElementById("demo").innerHTML = 5 + 6;


// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);



function add(num1, num2){
    a = num1 * num2
    return a
}

// const cars = ["Saab", "Volvo", "BMW"];
// alert(cars)

// var d = new Date();
// var day = d.getDay();
// var daylist = ["Sunday","Monday",
// "Tuesday","Wednesday ","Thursday","Friday","Saturday"];

// var hour = d.getHours();
// var minute = d.getMinutes();
// var second  = d.getSeconds();

// var output = `Today is ${daylist[day]} and the time is ${hour} : ${minute} and ${second} seconds`
// alert (output);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruit.sort())
document.write(fruit.reverse())
// var fruit_len = fruit.length

// for (let i = 0; i < fruit_len; i++){
//     DocumentTimeline.write(fruit[i])
// }

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);





