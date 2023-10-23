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
    }

    set codeList(codeList) {
        this._codeList = codeList.toLowerCase().split('\n')
    }

    get codeList() {
        return this._codeList
    }

    step() {

        if (!this.running && !this.oneTime) {
            return
        }

        this.oneTime = false


        if (this.codeList.length <= this.lineIndex) {
            try {
                codeCounter.querySelectorAll('span')[this.lineIndex - 1].classList.remove('current-line')
            }
            catch { }
            this.lineIndex = 0
        }

        let line = this.codeList[this.lineIndex].split(/\s+/)

        console.log(this.lineIndex + ': ' + line);

        if (line.length > 3) {
            procState.status = procStatus.ERROR
            procDisplay.update()
            return
        }

        let errorOccured = false
        switch (line[0].toLowerCase()) {
            case 'mov':
                console.log('mov');
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
            default:
                errorOccured = true
        }

        if (errorOccured) {
            procState.status = procStatus.ERROR
            procDisplay.update()
            return
        }

        try {
            codeCounter.querySelectorAll('span')[this.lineIndex - 1].classList.remove('current-line')
        }
        catch { }
        this.lineIndex++
        try {
            codeCounter.querySelectorAll('span')[this.lineIndex - 1].classList.add('current-line')
        } catch { }

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
    executor.codeList = codeSpace.value
    executor.running = false
    executor.oneTime = true
    procState.status = procStatus.RUNNING
    procDisplay.update()
    executor.step()

}

function playExecutor() {
    codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))

    if (procState.status == procStatus.RUNNING)
        {
            executor.running = true
            executor.delayMs = delayStandarts.STANDART
            procDisplay.update()
            executor.step()
            return
        }
    executor = new Execution()
    executor.codeList = codeSpace.value
    executor.running = true
    executor.delayMs = delayStandarts.STANDART
    procState.status = procStatus.RUNNING
    procDisplay.update()
    executor.step()
}

function fastPlayExecutor() {
    codeCounter.querySelectorAll('span').forEach((element) => element.classList.remove('current-line'))

    if (procState.status == procStatus.RUNNING)
        {
            executor.running = true
            executor.delayMs = delayStandarts.FAST
            procDisplay.update()
            executor.step()
            return
        }
    executor = new Execution()
    executor.codeList = codeSpace.value
    executor.running = true
    executor.delayMs = delayStandarts.FAST
    procState.status = procStatus.RUNNING
    procDisplay.update()
    executor.step()
}



