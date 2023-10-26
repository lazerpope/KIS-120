class JumpCommands {
    jmp(line) {
        if (line.length > 2)
            return true

        let dst = line[1] + ':'

        let jumpLineIndex = executor.codeList.findIndex(function (str) {
            return str.startsWith(dst);
        })
        if (jumpLineIndex == -1) {
            return true
        }
        executor.lineIndex = jumpLineIndex + 1
        return false

    }
    jez(line) {
        if (line.length > 2)
            return true

        let dst = line[1] + ':'

        let jumpLineIndex = executor.codeList.findIndex(function (str) {
            return str.startsWith(dst);
        })
        if (jumpLineIndex === -1) {
            return true
        }
        if (procState.registers.acc === 0)
            executor.lineIndex = jumpLineIndex + 1
        return false

    }
    jnz(line) {
        if (line.length > 2)
            return true

        let dst = line[1] + ':'

        let jumpLineIndex = executor.codeList.findIndex(function (str) {
            return str.startsWith(dst);
        })
        if (jumpLineIndex === -1) {
            return true
        }
        if (procState.registers.acc != 0)
            executor.lineIndex = jumpLineIndex + 1
        return false

    }
    jgz(line) {
        if (line.length > 2)
            return true

        let dst = line[1] + ':'

        let jumpLineIndex = executor.codeList.findIndex(function (str) {
            return str.startsWith(dst);
        })
        if (jumpLineIndex === -1) {
            return true
        }
        if (procState.registers.acc > 0)
            executor.lineIndex = jumpLineIndex + 1
        return false
    }
    jlz(line) {
        if (line.length > 2)
            return true

        let dst = line[1] + ':'

        let jumpLineIndex = executor.codeList.findIndex(function (str) {
            return str.startsWith(dst);
        })
        if (jumpLineIndex === -1) {
            return true
        }
        if (procState.registers.acc < 0)
            executor.lineIndex = jumpLineIndex + 1
        return false

    }
    jro(line) {
        if (line.length > 2)
            return true

        let dst = +line[1]

        if (isNaN(dst) || dst + executor.lineIndex >= 0 || dst + executor.lineIndex < executor.codeList.length) {
            return true
        }

        executor.lineIndex = jumpLineIndex + dst 

        return false
    }

}

const jumpCommands = new JumpCommands()