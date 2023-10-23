const procElement = document.querySelector('.main')

let procDisplay = {
    ioQueue: {
        in : [],
        out : [],
    },
    registers: {
        acc: procElement.querySelector('.proc-status #acc #data'),
        io: {
            in : procElement.querySelector('.in #number'),
            out: procElement.querySelector('.out #number'),
        },
        generalPurpose: {
            a:  procElement.querySelector('.proc-status #agp #data'),
            b:  procElement.querySelector('.proc-status #bgp #data'),
            c:  procElement.querySelector('.proc-status #cgp #data'),
        },
        swap:  {
            a:  procElement.querySelector('.proc-status #asr #data'),
            b:  procElement.querySelector('.proc-status #bsr #data'),
            c:  procElement.querySelector('.proc-status #csr #data'),
        },
        counter:  procElement.querySelector('.proc-status #clk #data'),

    },
    status: procElement.querySelector('.proc-status #status #data'),
    currentLine : 0,

    update : () => {   
                       
        procDisplay.registers.acc.innerText = procState.registers.acc

        procDisplay.registers.io.in.innerText = procState.registers.io.in
        procDisplay.registers.io.out.innerHTML = procState.registers.io.out

        procDisplay.registers.generalPurpose.a.innerText = procState.registers.generalPurpose.a
        procDisplay.registers.generalPurpose.b.innerHTML = procState.registers.generalPurpose.b
        procDisplay.registers.generalPurpose.c.innerHTML = procState.registers.generalPurpose.c

        procDisplay.registers.swap.a.innerText = procState.registers.swap.a
        procDisplay.registers.swap.b.innerHTML = procState.registers.swap.b
        procDisplay.registers.swap.c.innerHTML = procState.registers.swap.c
        
        procDisplay.registers.counter.innerHTML = procState.registers.counter
        
        procDisplay.status.innerHTML = procState.status
    },

};

















