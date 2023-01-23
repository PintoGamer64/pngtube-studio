const { ipcRenderer, contextBridge } = require('electron');

function close_window() {
    ipcRenderer.send('CloseWindow');
}

contextBridge.exposeInMainWorld(
    'pngtubeProcess',
    {
        close_window
    }
);