// Javascript Assignment 5

// Exercise 1
let tableOff = document.getElementById("table_off")
let numberOfTimes = document.getElementById("number_of_times")
let tableBtn = document.getElementById("table_button")
let tableDiv = document.getElementById("table")

let renderTable = () => {

    let tableOffValue = tableOff.value
    let numberOfTimesValue = numberOfTimes.value

    tableDiv.innerHTML = ""

    for (let x = 1; x <= numberOfTimesValue; x++) {
        tableDiv.innerHTML += "<p>" + tableOffValue + " x " + x + " = " + (tableOffValue * x) + "</p>"
    }
}

tableBtn.addEventListener("click", renderTable)


// Exercise 2
let startingNo = document.getElementById("starting")
let endingNo = document.getElementById("ending")
let evenBtn = document.getElementById("even_button")
let evenResult = document.getElementById("even_result")

let renderEven = () => {

    let startingNoValue = Number(startingNo.value)
    let endingNoValue = Number(endingNo.value)

    evenResult.innerHTML = ""

    for (let x = startingNoValue; x <= endingNoValue; x++) {

        if (x % 2 == 0) {
            evenResult.innerHTML += "<p>" + x + "</p>"
        }

    }

}

evenBtn.addEventListener("click", renderEven)


// Exercise 3
let countdownInput = document.getElementById("countdown_input")
let countdownBtn = document.getElementById("countdown_button")
let countdownDiv = document.getElementById("countdown")

let renderCountdown = () => {

    let countdownValue = Number(countdownInput.value)

    countdownDiv.innerHTML = ""

    for (let x = countdownValue; x >= 1; x--) {
        countdownDiv.innerHTML += "<p>" + x + "</p>"
    }

}

countdownBtn.addEventListener("click", renderCountdown)


// Exercise 4
let sumInput = document.getElementById("sum_input")
let sumBtn = document.getElementById("sum_button")
let sumDiv = document.getElementById("sum")

let renderSum = () => {

    let sumValue = Number(sumInput.value)
    let total = 0

    for (let x = 1; x <= sumValue; x++) {
        total += x
    }

    sumDiv.innerHTML = "<h3>Sum = " + total + "</h3>"

}

sumBtn.addEventListener("click", renderSum)


// Exercise 5
let patternInput = document.getElementById("pattern_input")
let patternBtn = document.getElementById("pattern_button")
let patternDiv = document.getElementById("pattern")

let renderPattern = () => {

    let patternValue = Number(patternInput.value)

    patternDiv.innerHTML = ""

    for (let i = 1; i <= patternValue; i++) {

        let line = ""

        for (let j = 1; j <= i; j++) {
            line += j
        }

        patternDiv.innerHTML += "<p>" + line + "</p>"
    }

}

patternBtn.addEventListener("click", renderPattern)