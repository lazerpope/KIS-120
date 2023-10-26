const delayStandarts = {
    STANDART: 500,
    FAST: 5
}

class Execution {
    constructor(codeList = '') {
        this.running = false
        this.lineIndex = 0
        this.delayMs = 500
        this.running = false
        this.oneTime = false
        this._codeList
        this.jumpLabels
    }

    set codeList(codeList) {
        let splittedCodeList = codeList.toLowerCase().split('\n')


        this.jumpLabels = splittedCodeList.filter(function (item) {
            return item.includes(":");
        })

        this.jumpLabels = this.jumpLabels.map(function (item) {
            var index = item.indexOf(':');
            return index !== -1 ? item.substring(0, index + 1) : item;
        })
        // console.log(this.jumpLabels);
        // console.log(splittedCodeList);

        this._codeList = splittedCodeList
    }

    get codeList() {
        return this._codeList
    }

    step() {
        // console.log(this.codeList);
        // console.log(this.codeList[this.lineIndex]);

        if (!this.running && !this.oneTime) {
            return
        }

        this.oneTime = false

        if (this.codeList.length <= this.lineIndex) {
            codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))
            
            this.lineIndex = 0
        }

        let line = this.codeList[this.lineIndex].replace(/\s{2,}/g, ' ').trim().split(/\s+/)
        // console.log(this.lineIndex + ': ' + line);
        // console.log(this.lineIndex + ': ' + this.codeList[this.lineIndex]);

        if (line[0] === '') {
            codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))
            this.lineIndex++
            try {
                codeCounter.querySelectorAll('span')[this.lineIndex - 1].classList.add('current-line')
            } catch { }
            this.step()
        }

        codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))
        this.lineIndex++
        try {
            codeCounter.querySelectorAll('span')[this.lineIndex - 1].classList.add('current-line')
        } catch { }



        if (line.length > 3) {
            procState.status = procStatus.ERROR
            procDisplay.update()
            return
        }

        let errorOccured = false
        switch (line[0].toLowerCase()) {
            case 'mov':
                errorOccured = basicCommands.mov(line)
                break;
            case 'swp':
                errorOccured = basicCommands.swp(line)
                break;
            case 'add':
                errorOccured = basicCommands.add(line)
                break;
            case 'sub':
                errorOccured = basicCommands.sub(line)
                break;
            case 'neg':
                errorOccured = basicCommands.neg(line)
                break;
            case 'jmp':
                errorOccured = jumpCommands.jmp(line)
            case 'jez':
                errorOccured = jumpCommands.jez(line)
                break;
            case 'jnz':
                errorOccured = jumpCommands.jnz(line)
                break;
            case 'jgz':
                errorOccured = jumpCommands.jgz(line)
                break;
            case 'jlz':
                errorOccured = jumpCommands.jlz(line)
                break;
            case 'jro':
                errorOccured = jumpCommands.jro(line)
                break;

            default:
                errorOccured = true
        }


        if (errorOccured) {
            procState.status = procStatus.ERROR
            procDisplay.update()
            return
        }



        procDisplay.update()



        if (this.running) {
            setTimeout(this.step.bind(this), this.delayMs)
        }

    }

}



let executor = new Execution()

function renewExecutor() {

    codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))

    executor.running = false
    executor = new Execution(codeSpace.value)
    procState = new State()
    procDisplay.update()
}


function stepExecutor() {
    if (procState.status == procStatus.RUNNING) {
        return
    }
    if (procState.status == procStatus.READY) {
        executor = new Execution()
        executor.codeList = codeSpace.value // потенциальный источник г__на но трогать не буду х_Й знает
        procState = new State()
    }
    executor.codeList = codeSpace.value
    executor.running = false
    executor.oneTime = true
    procState.status = procStatus.DEBUG
    procDisplay.update()
    executor.step()

}

function playExecutor() {
    codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))
    if (procState.status == procStatus.RUNNING) {
        executor.delayMs = delayStandarts.STANDART
        return
    }
    executor.running = false
    executor = new Execution()
    procState = new State()
    executor.codeList = codeSpace.value
    executor.running = true
    executor.delayMs = delayStandarts.STANDART
    procState.status = procStatus.RUNNING
    procDisplay.update()
    executor.step()
}

function fastPlayExecutor() {
    codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))

    if (procState.status == procStatus.RUNNING) {
        executor.delayMs = delayStandarts.FAST
        return
    }
    executor.running = false
    executor = new Execution()
    procState = new State()
    executor.codeList = codeSpace.value
    executor.running = true
    executor.delayMs = delayStandarts.STANDART
    procState.status = procStatus.RUNNING
    procDisplay.update()
    executor.step()
}



codeSpace.addEventListener('input', () => {
    procState.status = procStatus.READY
    procState = new State()
    procDisplay.update()
})

