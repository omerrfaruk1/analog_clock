let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second= document.getElementById("second")

function GetDateFromDateFunction(){
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    console.log(hours)
    hour.style.transform = `rotate(${180+(hours * 30)}deg)`
    minute.style.transform = `rotate(${180+(minutes * 6)}deg)`
    second.style.transform = `rotate(${180+(seconds * 6)}deg)`
}

setInterval(GetDateFromDateFunction,1000)