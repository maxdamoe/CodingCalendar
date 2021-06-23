// function to display current day / time at top of page
let Today = document.getElementById("currentDay")
Today.innerHTML = moment()

// getting minutes of the hour

let M = moment()
let timeAddition = M.subtract()
let getHour = M.get("hour")


console.log(getHour)

var nine = document.getElementById("9AM") 
let ten = document.getElementById("10AM")
let eleven = document.getElementById("11AM")
let twelve = document.getElementById("12AM")
let thirteen = document.getElementById("1PM")
let fourteen = document.getElementById("2PM")
let fifteen = document.getElementById("3PM")
let sixteen = document.getElementById("4PM")
let seventeen = document.getElementById("5PM")

nine = 9
ten = 10
eleven = 11
twelve = 12
thirteen = 13
fourteen = 14
fifteen = 15
sixteen = 16
seventeen = 17



let timeArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]

for (var i = 0; i < 9; i++) {
    if (timeArray[i] === getHour){console.log('true')
} else  {
    console.log('false')
}}





// function future(){
//     console.log("ass")
// }

// if (poop !== getHour){
//     future()
// } else {
//     //document.getElementsByClassName("hour").classList.add("past")
//     console.log(pussy)
// }


//push all the ids to an array, and then loop through the array

//IF the schedule hour is in the past based on the current hour, THEN make bar grey
//IF the schedule hour is the current hour, THEN make bar red
//IF the schedule hour is in the future based on the current hour, THEN make the bar green









//if it is an old section, behind the current time, we need the bar to be grey



//if happening is before current Time, then make the box grey


//function inPast (){


    // this function will check to see if it is in the past, and if it is, assign to the html the class of past, applying the css for the class past.
    // YOU CAN USE MULTIPLE CLASSES ON THE SAME ELEMENT!! YES!!!

// if it is the current hour, then we need the bar to be red

// if the bar is in the future, then we need the bar to be green.















// if save button clicked, we need to add to local storage

//let happening = document.getElementsByClassName("clicked"