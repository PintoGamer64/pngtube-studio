const { ipcRenderer, contextBridge } = require('electron');

function EventWindow(typeEvent = 'minimize' || 'close' || 'window') {
    ipcRenderer.send(typeEvent);
}

contextBridge.exposeInMainWorld(
    'pngtubeProcess',
    {
        EventWindow
    }
);