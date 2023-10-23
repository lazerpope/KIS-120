const readList = ['acc', 'clk', 'agp', 'bgp', 'cgp', 'in']
const writeList = ['acc', 'agp', 'bgp', 'cgp', 'out']

class BasicCommands {
    mov(line) {
        if (line.length > 3)
            return true
        let src = line[1]
        let dst = line[2]


        if (!readList.includes(src) && isNaN(src))
            return true

        if (!writeList.includes(dst))
            return true

        let srcValue = findSrcValue(src)
        if (srcValue === null)
            return true

        if (srcValue > 999 || srcValue < - 999)
            return true

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
                procState.registers.io.out = srcValue
                break;
            default:
                return true
        }

        return false

    }
    swp(line) {
        if (line.length > 2)
            return true
        let src = line[1]

        if (!readList.includes(src))
            return true

        let x;
        switch (src) {
            case 'agp':
                x = procState.registers.swap.a
                procState.registers.swap.a = procState.registers.generalPurpose.a
                procState.registers.generalPurpose.a = x
                break;
            case 'bgp':
                x = procState.registers.swap.b
                procState.registers.swap.b = procState.registers.generalPurpose.b
                procState.registers.generalPurpose.b = x
                break;
            case 'cgp':
                x = procState.registers.swap.c
                procState.registers.swap.c = procState.registers.generalPurpose.c
                procState.registers.generalPurpose.c = x
                break;
            default:
                return true
        }


    }
    add(line) {
        if (line.length > 2)
            return true
        let src = line[1]


        const readList = ['acc', 'clk', 'agp', 'bgp', 'cgp', 'in']
        if (!readList.includes(src) && isNaN(src))
            return true

        let srcValue = findSrcValue(src)
        if (srcValue == null)
            return true

        procState.registers.acc += srcValue

        if (procState.registers.acc > 999 || procState.registers.acc < - 999)
            return true


    }
    sub(line) {
        if (line.length > 2)
            return true
        let src = line[1]


        const readList = ['acc', 'clk', 'agp', 'bgp', 'cgp', 'in']
        if (!readList.includes(src) && isNaN(src))
            return true

        let srcValue = findSrcValue(src)
        if (srcValue == null)
            return true

        procState.registers.acc -= srcValue
        if (procState.registers.acc > 999 || procState.registers.acc < - 999)
            return true
    }
    neg(line) {
        if (line.length > 1)
            return true
        procState.registers.acc = procState.registers.acc * -1
    }
}

const basicCommands = new BasicCommands()



function findSrcValue(src) {

    if (!readList.includes(src)) {
        return +src
    }
    else {
        switch (src) {
            case 'acc':
                return procState.registers.acc
                break;
            case 'clk':
                return procState.registers.counter
                break;
            case 'agp':
                return procState.registers.generalPurpose.a
                break;
            case 'bgp':
                return procState.registers.generalPurpose.b
                break;
            case 'cgp':
                return procState.registers.generalPurpose.c
                break;
            case 'in':
                return procState.registers.io.in
                break;
            default:
                return null
        }

    }

}