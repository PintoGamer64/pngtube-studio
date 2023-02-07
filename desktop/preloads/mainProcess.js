// Node Modules
const { ipcRenderer, contextBridge } = require('electron');

// DOM
const body = document.getElementById('body');

function EventWindow(typeEvent = 'minimize' || 'close' || 'window') {
    ipcRenderer.send(typeEvent);
}

ipcRenderer.on('ping', (event, { image }) => {
    console.log(image)
    body.style.backgroundImage = image
})

contextBridge.exposeInMainWorld(
    'pngtubeProcess',
    {
        EventWindow
    }
);