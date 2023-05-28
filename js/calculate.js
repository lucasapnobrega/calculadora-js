export default function calculate() {
    const result = document.getElementById('result')

    result.value = 'ERROR'
    result.classList.add('error')
    
    if(input.value === '') {
        result.value = 0
        result.classList.remove('error')
        return
    }

    const resultOperation = eval(input.value)
    result.value = resultOperation
    result.classList.remove('error')
}