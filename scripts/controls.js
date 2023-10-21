const controlsElement = document.querySelector('.left .controls');

controlsElement.querySelector('#stop').addEventListener('click',(e) => {
    renewExecutor()
});

controlsElement.querySelector('#step').addEventListener('click',(e) => {
    stepExecutor()
});

controlsElement.querySelector('#play').addEventListener('click',(e) => {
    playExecutor()
})

controlsElement.querySelector('#fast').addEventListener('click',(e) => {
    fastPlayExecutor() 
})

procDisplay.update()

