const controlsElement = document.querySelector('.left .controls');

controlsElement.querySelector('#stop').addEventListener('click',(e) => {
    console.log('stop');
});

controlsElement.querySelector('#step').addEventListener('click',(e) => {
    console.log('step');
});

controlsElement.querySelector('#play').addEventListener('click',(e) => {
    console.log('play');
})

controlsElement.querySelector('#fast').addEventListener('click',(e) => {
  procDisplay.update()
//   console.log(procDisplay);
})

procDisplay.update()

