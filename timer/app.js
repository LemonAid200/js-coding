const timer = document.querySelectorAll(".countdown-item > h4")
const countdownElement = document.querySelector(".countdown")
const img = document.querySelector(".container")

let countdownDate = new Date(2022, 2, 6, 18, 9).getTime()


function getCoundownTime() {
    const now = new Date().getTime()
    const distance = countdownDate - now


    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = Math.floor(distance / oneDay)
    let hours = Math.floor(distance % oneDay / oneHour)
    let minutes = Math.floor(distance % oneHour / oneMinute)
    let seconds = Math.floor(distance % oneMinute / 1000)

    const values = [days, hours, minutes, seconds]


    timer.forEach(function (item, index) {
        item.textContent = [values[index]]
    })

    if (distance < 0) {
        clearInterval(countdown)
        timeExpired()
    }
}


let countdown = setInterval(getCoundownTime, 1000)
if (new Date().getTime() < countdownDate) {
    getCoundownTime()
} else {
    timeExpired()
}

function timeExpired(){
    countdownElement.innerHTML = "<h4 class='expired'>You got Shreked!</h4>"
    img.innerHTML = "<img class='image' src='content/shreked.jpg' alt='He Will Shreck you down!'>"
}