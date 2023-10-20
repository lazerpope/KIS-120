const codeSpace = document.querySelector('.main .proc .proc-code textarea')
const codeCounter = document.querySelector('.main .proc .line-counter')

codeSpace.style.height  = (codeSpace.scrollHeight) + "px;overflow-y:hidden;"

let commands = ['mov', 'add', 'sub',]
let registers = ['acc','clk', 'agp', 'asr', 'bgp','bsr','cgp','csr']

let allowedWords = commands + registers

codeSpace.addEventListener('input', () => {
    let text = codeSpace.value.split('\n')    
    let out = ''
    codeCounter.innerHTML = out
    for (let i = 1; i < text.length + 1; i++) {
        let line = text[i-1].split(/ +/)
        let isLineWithNoErrors = true
        for (let j = 0; j < line.length; j++) {
            let hasUnresolvedWords = allowedWords.indexOf(line[j].toLowerCase() ) == -1
            let lineIsNotEmpty = line[j] != ''  
            let isLineNumber = /^-?[0-9]+$/.test(line[j])  
            if (hasUnresolvedWords  &&  lineIsNotEmpty && !isLineNumber) {
                isLineWithNoErrors = false
                break

            }            
        }  
        if (isLineWithNoErrors) {            
            out +=  i + '\n'

        }
        else{
            out += '<span class="error">'+ i + '</span>\n'

        }

    }
    codeCounter.innerHTML = out

    
    codeSpace.style.height = (codeSpace.scrollHeight) + "px";
})




