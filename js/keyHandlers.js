import calculate from "./calculate.js"

const input = document.getElementById('input')

function handleButtonPress(ev) {
    const button = ev.currentTarget
    
    const value = button.dataset.value
    input.value += value
}

function handleClearButton() { // quando clica no "clear"

    input.value = ''
    input.focus()
}

function handleTyping(ev) { // quando digita diretamente do teclado
    ev.preventDefault() 

    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

    if(allowedKeys.includes(ev.key)) { 
        input.value += ev.key
        return
    }

    if(ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'Enter') {
        calculate() // preciso importar a função calculate
    }
}

export { handleButtonPress, handleClearButton, handleTyping }