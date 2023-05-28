export default (ev) => {

    const buttonCopy = ev.currentTarget
    const result = document.getElementById('result')

    if(buttonCopy.innerText === 'Copy') {
        buttonCopy.innerText = 'Copied!'
        buttonCopy.classList.add('success')

        navigator.clipboard.writeText(result.value)
    } else {
        buttonCopy.innerText = 'Copy'
        buttonCopy.classList.remove('success')
    }
}