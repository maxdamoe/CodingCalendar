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








const timeArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]

for (var i = 0; i < timeArray.length; i++) {

    // if statements for the past 

    if (nine < getHour && (timeArray[i] = 9 )){ 
        bar1.classList.add(past)
        console.log(timeArray[0]) 
}
    if (ten < getHour && (timeArray[i] = 10 )){
        bar2.classList.add(past)
        console.log(timeArray[0])
} 
    if (eleven < getHour && (timeArray[i] = 11 )){
        bar3.classList.add(past)
} 
    if (twelve < getHour && (timeArray[i] = 12 )){
        bar4.classList.add(past)
} 
    if (thirteen < getHour && (timeArray[i] = 13 )){
        bar5.classList.add(past)
} 
    if (fourteen < getHour && (timeArray[i] = 14 )){
        bar6.classList.add(past)
} 
    if (fifteen < getHour && (timeArray[i] = 15 )){
        bar7.classList.add(past)
}   
    if (sixteen < getHour && (timeArray[i] = 16 )){ 
        bar8.classList.add(past)
} 
    if (seventeen < getHour && (timeArray[i] = 17 )){
        bar9.classList.add(past)
    
}

// If statements for the present

    if (nine === getHour && (timeArray[i] = 9)) {
        bar1.classList.add(present)    
} 
    if (ten === getHour && (timeArray[i] = 10)) {
        bar2.classList.add(present)
        console.log(getHour)
        console.log(timeArray[i])    
} 
    if (eleven === getHour && (timeArray[i] = 11)) {
        bar3.classList.add(present)    
}
    if (twelve === getHour && (timeArray[i] = 12)) {
        bar4.classList.add(present)    
} 
    if (thirteen === getHour && (timeArray[i] = 13)) {
        bar5.classList.add(present)    
} 
    if (fourteen === getHour && (timeArray[i] = 14)) {
        bar6.classList.add(present)    
} 
    if (fifteen === getHour && (timeArray[i] = 15)) {
        bar7.classList.add(present)    
} 
    if (sixteen === getHour && (timeArray[i] = 16)) {
        bar8.classList.add(present)    
} 
    if (seventeen === getHour && (timeArray[i] = 17)) {
        bar9.classList.add(present)    
} 

// if statements for the future

    if (nine > getHour && (timeArray[i] = 9 )){ 
        bar1.classList.add(future) 
}
    if (ten > getHour && (timeArray[i] = 10 )){ 
        bar2.classList.add(future) 
}
    if (eleven > getHour && (timeArray[i] = 11 )){ 
        bar3.classList.add(future) 
}
    if (twelve > getHour && (timeArray[i] = 12 )){ 
        bar4.classList.add(future) 
}
    if (thirteen > getHour && (timeArray[i] = 13 )){ 
        bar5.classList.add(future) 
}
    if (fourteen > getHour && (timeArray[i] = 14 )){ 
        bar6.classList.add(future) 
}
    if (fifteen > getHour && (timeArray[i] = 15 )){ 
        bar7.classList.add(future) 
}
    if (sixteen > getHour && (timeArray[i] = 16 )){ 
        bar8.classList.add(future) 
}
    if (seventeen > getHour && (timeArray[i] = 17 )){ 
        bar9.classList.add(future) 
}}



const nuts = document.getElementsByClassName('saveBtn')

// nuts.addEventListener('click', addToStorage())


function addToStorage (){
 
    var text = document.getElementsByClassName('col-6').value;

    localStorage.setItem('content', text)
    console.log(localStorage.getItem('content'))
        
}

addToStorage()
console.log(localStorage)







// if save button clicked, we need to add to local storage

//let happening = document.getElementsByClassName("clicked"