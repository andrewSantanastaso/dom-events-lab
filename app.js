/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    // button.addEventListener('mousedown', (event) => {
    //     event.target.style.backgroundColor = 'yellow'
    //     event.target.style.borderColor = 'yellow'
    //     event.target.style.color = 'black'

    // })

    button.addEventListener('click', (event) => {
        console.log(event.target.innerText)

        input = event.target.innerText
    })


})
calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {

        display.innerText += Number(input)
    }

    if (event.target.classList.contains('operator')) {
        num1 = Number(display.innerText)
        operatorInput = event.target.innerText
        operator = operatorInput
        clearScreen()

        if (typeof input === 'number') {
            display.innerText += input
        }
    }
    if (event.target.classList.contains('equals')) {
        let num2 = Number(display.innerText)

        switch (operatorInput) {
            case "+":
                display.innerText = addition(num1, num2)

                break;

            case "-":
                display.innerText = subtraction(num1, num2)


                break;
            case "*":
                display.innerText = multiplication(num1, num2)


                break;
            case "/":
                display.innerText = division(num1, num2)

                break;
            default:
                num1 = Number(display.innerText)
                operatorInput = operator
        }

    }

    // if (event.target.classList.contains('number')) {
    //     input = event.target.innerText
    //     clearScreen()
    //     display.innerText = input
    // }
    if (event.target.innerText === 'C') {
        clearScreen()
    }
})
// buttons.addEventListener('mousedown', (event) => {
//     event.target.style.backgroundColor = 'yellow'
// })
/*-------------------------------- Functions --------------------------------*/
const addition = (num1, num2) => {
    return num1 + num2
}
const subtraction = (num1, num2) => {
    return num1 - num2
}
const multiplication = (num1, num2) => {
    return num1 * num2
}
const division = (num1, num2) => {
    if (num2 == 0) {
        // throw new Error
        return "Error"
    }
    return num1 / num2
}
const clearScreen = () => {
    display.innerText = ''
}