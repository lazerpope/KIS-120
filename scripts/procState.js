const procStatus = {
    READY: 'ready',
    RUNNING: 'running',
    DEBUG: 'DEBUG',
    ERROR: '<span class="error">error</span>',

}

class State{
    constructor() {
      this.ioQueue = {
        in: [],
        out: [],
      };
      this.registers = {
        acc: 0,
        io: {
          in: 0,
          out: 0,
        },
        generalPurpose: {
          a: 0,
          b: 0,
          c: 0,
        },
        swap: {
          a: 0,
          b: 0,
          c: 0,
        },
        counter: 0,
      };
      this.status = procStatus.READY; // Assuming procStatus is defined elsewhere
      this.currentLine = 0
    }
  }
  

let procState = new State()