
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = require('electron').ipcMain;

app.on('ready', function () {

    var mainWindow = new BrowserWindow({
        width: 414,
        height: 716,
        width: 990,
        height: 620,
        frame: false
    });

    mainWindow.openDevTools();

    mainWindow.loadURL('file://' + __dirname + '/src/index.html');

    ipc.on('close', function () {
        mainWindow.close();
        mainWindow = null;
    });

    ipc.on('max', function () {
        mainWindow.maximize();
    });

    ipc.on('restore', function () {
        mainWindow.restore();
    });

    ipc.on('min', function () {
        mainWindow.minimize();
    });

});