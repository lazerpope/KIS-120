class Execution {
    constructor(codeList) {
        this.running = false
        this.lineIndex = 0
        this.codeList = codeList.toLowerCase().split('\n')
    }

    step(running=false) {
        if (this.codeList.length <= this.lineIndex) {
            console.log('no next line');
            return
        }

        console.log(this.lineIndex);
        console.log(this.codeList);

        let line = this.codeList[this.lineIndex].split(/\s+/)

        if (line.length>3) {
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
                console.log('swp' + line);
                break;
            case 'add':
                console.log('add' + line);
                break;
            case 'sub':
                console.log('sub' + line);
                break;
            case 'neg':
                console.log('neg' + line);
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
        this.lineIndex++
    }

}



let executor = new Execution('')

function renewExecutor() {
    executor = new Execution(codeSpace.value)
    procState = new State()
    procDisplay.update()
}


function stepExecutor() {
    alert('not implemented');

}

function playExecutor() {
    executor = new Execution(codeSpace.value)
    executor.step(true)
}

function fastPlayExecutor() {
   alert('not implemented');

}


