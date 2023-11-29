const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#year")


const hour = document.querySelector("#hr")
const minute = document.querySelector("#min")
const second = document.querySelector("#sec")


const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"]
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July",  "Aug", "Sep", "Oct", "Nov", "Dec"]
const morning = document.querySelector("#mOrA")

function clock (){

const dateTime = new Date()

month.innerHTML = dateTime.getDate()
day.innerHTML = monthName[dateTime.getMonth()]
year.innerHTML = dateTime.getFullYear()

if(dateTime.getHours() > 12){
    morning.innerHTML = "PM"
}
else {
    morning.innerHTML = "AM"
}

if(dateTime.getHours() < 10){
    hour.innerHTML = `0${dateTime.getHours()}:`
}
else{
    hour.innerHTML = dateTime.getHours() + ":"
}
if(dateTime.getMinutes() < 10 ){
    min.innerHTML = `0${dateTime.getMinutes()}: `
}
else{
    min.innerHTML = dateTime.getMinutes() + ":"
}

sec.innerHTML = dateTime.getSeconds ()




}

setInterval(clock)