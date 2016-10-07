/// <reference path="../typings/index.d.ts" />

import electron = require('electron');
const { app, dialog, BrowserWindow, Menu } = electron;

// Keep global reference to main window or it will be garbage collected.
let mainWindow : Electron.BrowserWindow;

// Opens the main window
function createWindow(){
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.toggleDevTools();
    mainWindow.on('close', () => {
        mainWindow = null;
    });
}

// Call createWindow on start
app.on('ready', () => {
    createWindow();
});

// Do OSX stuff
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

// More OSX stuff
app.on('activate', () => {
    if(mainWindow === null){
        createWindow();
    }
});