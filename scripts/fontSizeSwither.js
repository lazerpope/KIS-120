const fontSwitch = document.querySelector('.menu .font-switch')

let fontList = [
    {
        size: '0.8rem',
        comment: 'Мало'
    },
    {
        size: '1rem',
        comment: 'стандарт'
    },
    {
        size: '1.1rem',
        comment: 'больше'
    },
    {
        size: '1.2rem',
        comment: 'много'
    },
    {
        size: '1.3rem',
        comment: 'ого'
    },
]

let fontPointer = 0

fontSwitch.addEventListener('click', nextFontSize)

nextFontSize() 

function nextFontSize() {    
        fontPointer++
        fontPointer = fontPointer % fontList.length
        document.body.style.setProperty('--my-font-adaptive-size', fontList[fontPointer].size);
        fontSwitch.innerHTML = 'размер шрифта: ' + fontList[fontPointer].comment    
}