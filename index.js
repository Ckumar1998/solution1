var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Frid', 'Sat'];

function solution(d){
let mydays = new Map();
mydays.set('Sun',0);
mydays.set('Mon',0);
mydays.set('Tue',0);
mydays.set('Wed',0);
mydays.set('Thu',0);
mydays.set('Fri',0);
mydays.set('Sat',0);
	for (let [key, value] of myMap) {
  	console.log(key + ' = ' + value)
    var dt = new Date(key);
    //var day = dt.day();
    console.log(mydays.get(key));
    mydays.set(days[dt.getDay()], (mydays.get(key)+value));

	}
  for (let [key, value] of mydays){
  //console.log(key+', '+value);
  }
}

let myMap = new Map();
myMap.set('2020-01-01',4);
myMap.set('2020-01-02',4);
myMap.set('2020-01-03',6);
myMap.set('2020-01-04',8);
myMap.set('2020-01-05',2);
myMap.set('2020-01-06',-6);
myMap.set('2020-01-07',2);
myMap.set('2020-01-08',-2);
solution(myMap);













let num1="4"
let num2="4"
let num3="6"
let num4="8"
let num5="2"
let num6="-6"
let num7="2"
let num8="-2"
let dateString = '2/1/2020'

// takin the date from inbilt function
let day = new Date(dateString).getDay();
let month = new Date(dateString).getMonth()
let year =  new Date(dateString).getFullYear()
let dayName;

if (day ==1){
    dayName= 'Sunday'
}else if (day == 2){
    dayName= 'Monday'
}else if (day == 3){
    dayName= 'Tuesday'
}else if (day == 4){
    dayName= 'Wednesday'
}else if (day == 5){
    dayName= 'Thursday'
}else if (day ==6){
    dayName= 'Friday'
}else if(day ==7){
    dayName= 'Saturday'
}
else {
  dayName='not define' 
}

console.log(`Day : ${dayName} Month: ${month} Year : ${year} ${num1} `)


//
// let dateString1 = '3/1/2020'

// // converting Date String to Javascript Date Format
// let day = new Date(dateString1).getDay();
// let month = new Date(dateString1).getMonth()
// let year =  new Date(dateString1).getFullYear()
// let dayName;

// if (day ==1){
//     dayName= 'Sunday'
// }else if (day == 2){
//     dayName= 'Monday'
// }else if (day == 3){
//     dayName= 'Tuesday'
// }else if (day == 4){
//     dayName= 'Wednesday'
// }else if (day == 5){
//     dayName= 'Thursday'
// }else if (day ==6){
//     dayName= 'Friday'
// }else if(day ==7){
//     dayName= 'Saturday'
// }
// else {
//   dayName='not define' 
// }

// console.log(`Day : ${dayName} Month: ${month+1} Year : ${year} ${num} `)


// second medthods



