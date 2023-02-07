// Node Modules
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const { join } = require('path');

// Import Classes
const { InitProcess } = require('./init');

// Initialize
const { __Init__ } = InitProcess();

// Executions
__Init__();

const appBackground = require('C:/Users/Joan Cardozoç/AppData/Roaming/PNGtubeSettings/settings.json').appBackground.wallpaper;
const pathBackgrounds = require('C:/Users/Joan Cardozoç/AppData/Roaming/PNGtubeSettings/settings.json').wallpapersPath;
const URLcomplete = join(pathBackgrounds, `${appBackground}.jpg`);
console.log(URLcomplete);

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        //titleBarStyle: 'hidden',
        webPreferences: {
            images: true,
            devTools: true,
            nodeIntegration: true,
            preload: join(__dirname, './preloads/mainProcess.js')
        }
    });
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);

    mainWindow.webContents.send('ping', { image: URLcomplete })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

//Window Events
ipcMain.on('window', () => {
    if (mainWindow.isMaximized()) {
        return mainWindow.restore();
    }
    return mainWindow.maximize();
})
ipcMain.on('minimize', () => {
    mainWindow.minimize();
})
ipcMain.on('close', () => {
    app.quit();
});

//Settings Events
ipcMain.on('disableHardwareAceleration', (event, { state }) => {
    
})