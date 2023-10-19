let sysFont = true
function swapFont() {
    if (sysFont) {
        fontChanger.innerText = 'Нормальный шрифт: вкл'
        document.body.style.fontFamily = 'Roboto, sans-serif'
        sysFont = false
    }
    else {
        fontChanger.innerText = 'Нормальный шрифт: выкл'
        document.body.style.fontFamily = 'sys'
        sysFont = true
    }
}

