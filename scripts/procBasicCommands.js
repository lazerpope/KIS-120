class BasicCommands {
    mov(line) {
        if (line.length > 3)
            return true
        let src = line[1]
        let dst = line[2]

        let srcValue;

        const readList = ['acc', 'clk', 'agp', 'bgp', 'cgp', 'in']
        if (!readList.includes(src) && isNaN(src))
            return true


        const writeList = ['acc', 'agp', 'bgp', 'cgp', 'out']
        if (!writeList.includes(dst))
            return true

        if (!readList.includes(src)) {
            srcValue = +src
        }
        else {
            switch (src) {
                case 'acc':
                    srcValue = procState.registers.acc
                    break;
                case 'clk':
                    srcValue = procState.registers.counter
                    break;
                case 'agp':
                    srcValue = procState.registers.generalPurpose.a
                    break;
                case 'bgp':
                    srcValue = procState.registers.generalPurpose.b
                    break;
                case 'cgp':
                    srcValue = procState.registers.generalPurpose.c
                    break;
                case 'in':
                    srcValue = procState.io.in
                    break;
                default:
                    return true
            }

        }

        switch (dst) {
            case 'acc':
                procState.registers.acc = srcValue
                break;
            case 'agp':
                procState.registers.generalPurpose.a = srcValue
                break;
            case 'bgp':
                procState.registers.generalPurpose.b = srcValue
                break;
            case 'cgp':
                procState.registers.generalPurpose.c = srcValue
                break;
            case 'out':
                procState.io.out = srcValue
                break;
            default:
                return true
        }

        return false

    }
    swp(line) {

    }
    add(line) {

    }
    sub(line) {

    }
    neg(line) {

    }
}

const basicCommands = new BasicCommands()