const procStatus = {
    READY: 'ready',
    RUNNING: 'running',
    ERROR: 'error',

}

const procState = {
    ioQueue: {
        in : [],
        out : [],
    },
    registers: {
        acc: 0,
        io: {
            in : 0,
            out: 0,
        },
        generalPurpose: {
            a: 0,
            b: 0,
            c: 0,
        },
        swap:  {
            a: 0,
            b: 0,
            c: 0,
        },
        counter: 0,

    },
    status: procStatus.READY,

};