// function to display current day / time at top of page
let Today = document.getElementById("currentDay")
Today.innerHTML = moment()

// getting minutes of the hour

let M = moment()
let timeAddition = M.subtract()
let getHour = M.get("hour")

let past = "past"
let present = "present"
let future = "future"

console.log(getHour)

var bar1 = document.getElementById("9AM") 
let bar2 = document.getElementById("10AM")
let bar3 = document.getElementById("11AM")
let bar4 = document.getElementById("12AM")
let bar5 = document.getElementById("1PM")
let bar6 = document.getElementById("2PM")
let bar7 = document.getElementById("3PM")
let bar8 = document.getElementById("4PM")
let bar9 = document.getElementById("5PM")

nine = 9
ten = 10
eleven = 11 
twelve = 12
thirteen = 13
fourteen = 14
fifteen = 15
sixteen = 16
seventeen = 17



const poop = Array.from(document.getElementsByClassName('col-6'));

console.log(poop)




let timeArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]

for (var i = 0; i < poop.length; i++) {

    // if statements for the past 

    if (timeArray[i] < getHour && (timeArray[i] = 9 )){ 
        bar1.classList.add(past) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 10 )){
        bar2.classList.add(past)
} 
    if (timeArray[i] < getHour && (timeArray[i] = 11 )){
        bar3.classList.add(past)
} 
    if (timeArray[i] < getHour && (timeArray[i] = 12 )){
        bar4.classList.add(past)
} 
    if (timeArray[i] < getHour && (timeArray[i] = 13 )){
        bar5.classList.add(past)
} 
    if (timeArray[i] < getHour && (timeArray[i] = 14 )){
        bar6.classList.add(past)
} 
    if (timeArray[i] < getHour && (timeArray[i] = 15 )){
        bar7.classList.add(past)
}   
    if (timeArray[i] < getHour && (timeArray[i] = 16 )){ 
        bar8.classList.add(past)
} 
    if (timeArray[i] < getHour && (timeArray[i] = 17 )){
        bar9.classList.add(past)
    
}}

// // If statements for the present

    if (timeArray[i] === getHour && (timeArray[i] = 9)) {
        bar1.classList.add(present)    
} 
    if (timeArray[i] === getHour && (timeArray[i] = 10)) {
        bar2.classList.add(present)    
} 
    if (timeArray[i] === getHour && (timeArray[i] = 11)) {
        bar3.classList.add(present)    
}
    if (timeArray[i] === getHour && (timeArray[i] = 12)) {
        bar4.classList.add(present)    
} 
    if (timeArray[i] === getHour && (timeArray[i] = 13)) {
        bar5.classList.add(present)    
} 
    if (timeArray[i] === getHour && (timeArray[i] = 14)) {
        bar6.classList.add(present)    
} 
    if (timeArray[i] === getHour && (timeArray[i] = 15)) {
        bar7.classList.add(present)    
} 
    if (timeArray[i] === getHour && (timeArray[i] = 16)) {
        bar8.classList.add(present)    
} 
    if (timeArray[i] === getHour && (timeArray[i] = 17)) {
        bar9.classList.add(present)    
} 

// if statements for the future

    if (timeArray[i] > getHour && (timeArray[i] = 9 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] > getHour && (timeArray[i] = 10 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 11 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 12 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 13 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 14 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 15 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 16 )){ 
        bar1.classList.add(future) 
}
    if (timeArray[i] < getHour && (timeArray[i] = 17 )){ 
        bar1.classList.add(future) 
}









// else {
//     console.log('future')
//     bar8.classList.add(future)
//     bar9.classList.add(future)
// }};



function changeClass(){

}






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