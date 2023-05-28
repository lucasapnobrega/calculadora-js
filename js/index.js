import calculate from "./calculate.js"
import copy from "./copy.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')

const charKeys = document.querySelectorAll('.charKey')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')
const copyToClipboard = document.getElementById('copyToClipboard')
const themeSwitcherBtn = document.getElementById('themeSwitcher')


charKeys.forEach(cKey => {
    cKey.addEventListener('click', handleButtonPress)
})

clear.addEventListener('click', handleClearButton)
input.addEventListener('keydown', handleTyping)
equal.addEventListener('click', calculate)
copyToClipboard.addEventListener('click', copy)
themeSwitcherBtn.addEventListener('click', themeSwitcher)