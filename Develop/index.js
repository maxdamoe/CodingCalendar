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
}
    if (ten < getHour && (timeArray[i] = 10 )){
        bar2.classList.add(past)
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





// nuts.addEventListener('click', addToStorage())






const nineAMText = document.getElementById("nineAMtext")
const tenAMText = document.getElementById("tenAMtext")
const elevenAMText = document.getElementById("elevenAMtext")
const twelvePMText = document.getElementById("twelvePMtext")
const onePMText = document.getElementById("onePMtext")
const twoPMText = document.getElementById("twoPMtext")
const threePMText = document.getElementById("threePMtext")
const fourPMText = document.getElementById("fourPMtext")
const fivePMText = document.getElementById("fivePMtext")

const nuts = document.getElementsByClassName('saveBtn')



for (var i = 0; i < nuts.length; i++) {
    nuts[i].addEventListener('click', testing);
}




function testing(){
        console.log('testing)')
        console.log(nineAMText.innerHTML)
        localStorage.setItem('9amNotes', nineAMText.innerHTML)
        localStorage.setItem('10amNotes', tenAMText.innerHTML)
        localStorage.setItem('11amNotes', elevenAMText.innerHTML)
        localStorage.setItem('12pmNotes', twelvePMText.innerHTML)
        localStorage.setItem('1pmNotes', onePMText.innerHTML)
        localStorage.setItem('2pmNotes', twoPMText.innerHTML)
        localStorage.setItem('3pmNotes', threePMText.innerHTML)
        localStorage.setItem('4pmNotes', fourPMText.innerHTML)
        localStorage.setItem('5pmNotes', fivePMText.innerHTML)
        
}

nineAMText.innerHTML = localStorage.getItem('9amNotes')
tenAMText.innerHTML = localStorage.getItem('10amNotes')
elevenAMText.innerHTML = localStorage.getItem('11amNotes')
twelvePMText.innerHTML = localStorage.getItem('12pmNotes')
onePMText.innerHTML = localStorage.getItem('1pmNotes')
twoPMText.innerHTML = localStorage.getItem('2pmNotes')
threePMText.innerHTML = localStorage.getItem('3pmNotes')
fourPMText.innerHTML = localStorage.getItem('4pmNotes')
fivePMText.innerHTML = localStorage.getItem('5pmNotes')





