const controlsElement = document.querySelector('.left .controls');

controlsElement.querySelector('#stop').addEventListener('click',(e) => {
   
    renewExecutor()
});

controlsElement.querySelector('#step').addEventListener('click',(e) => {
    if (codeSpace.value.replace(/\s/g, "") === "") 
    return
    stepExecutor()
});

controlsElement.querySelector('#play').addEventListener('click',(e) => {
    if (codeSpace.value.replace(/\s/g, "") === "") 
    return
    playExecutor()
})

controlsElement.querySelector('#fast').addEventListener('click',(e) => {
    if (codeSpace.value.replace(/\s/g, "") === "") 
    return
    fastPlayExecutor() 
})

procDisplay.update()

