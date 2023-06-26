setInterval(setClocks, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function setAnalogClock(hours, minutes, seconds) {
    const secondsRatio = seconds / 60
    const minutesRatio = (minutes + secondsRatio) / 60
    const hoursRatio = (hours + minutesRatio) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setDigitalClock(hours, minutes, seconds) {
    hoursPadded = hours.toString().padStart(2, '0')
    minutesPadded = minutes.toString().padStart(2, '0')
    secondsPadded = seconds.toString().padStart(2, '0')
    timeString = `${hoursPadded}:${minutesPadded}:${secondsPadded}`
    document.getElementById('digital-time').innerHTML = timeString
}

function setClocks() {
    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    setAnalogClock(hours, minutes, seconds)
    setDigitalClock(hours, minutes, seconds)
}

setClocks()
