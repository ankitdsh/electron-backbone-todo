'use strict';

const electron = require('electron');
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

const dialog = electron.dialog;

const ipc = electron.ipcMain;
//const dialog = require('electron').remote.dialog;
//const RemoteWindow = require('electron').remote.BrowserWindow; // Module to create a remote child window













// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let mainWindow1;
let remoteWindow;










/*==================FILE MODULE======================*/
var fileModule = (function() {

    var fs = require('fs');



    var File = {

        readFile: function(files) {
            if (files === undefined) return;
            var fileName = files[0];

            console.log(fileName)
            fs.readFile(fileName, 'utf-8', function(err, data) {

                console.log('----------------------File Content Start-------------------')
                console.log(data);
                console.log('----------------------File Content End-------------------')

            });


        },
        writeFile: function(fileName, data) {

            // ipc.send('atom-context', {
            //     this: this,
            //     global: global,
            //     GLOBAL: GLOBAL,
            //     root: root,
            //     //self: self
            // })


            // var localStorage = global.localStorage || root.localStorage ||
            // GLOBAL.localStorage;

            var fileContent = 'hello'

            console.log('----------------------File Content Start-------------------')
            console.log(fileContent);
            console.log(fileName);
            console.log(data);
            console.log('----------------------File Content End-------------------')
            fs.writeFile(fileName, fileContent);
        },

    }




    return File;
})();

/*==================FILE MODULE======================*/












// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {



    ipc.on('close-main-window', function() {
        console.log('close-main-window')
        mainWindow.close();
    });

    ipc.on('maximize-main-window', function() {
        console.log('maximize-main-window')


        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize()
        } else {
            mainWindow.maximize()
        }

    });

    ipc.on('minimize-main-window', function() {
        console.log('minimize-main-window')

        mainWindow.minimize();
    });

    ipc.on('set-fullscreen-main-window', function() {
        console.log('set-fullscreen-main-window')
        if (!mainWindow.isFullScreen())
            mainWindow.setFullScreen(true);
        else
            mainWindow.setFullScreen(false);


    });


    // ipc.on('import-data-from-file', function() {
    //     console.log('import-data-from-file')

    //     dialog.showOpenDialog(mainWindow, {
    //         title: 'import a file',
    //         filters: [{
    //             name: 'csv',
    //             extensions: ['csv', 'txt']
    //         }, {
    //             name: 'json',
    //             extensions: ['json']
    //         }],
    //         properties: ['openFile']
    //     });

    // }, function(data) {
    //     console.log('sucess')
    // });

    ipc.on('import-data-from-file', function() {
        console.log('import-data-from-file')

        dialog.showOpenDialog({
            title: 'import a file',
            filters: [

                // {
                //     name: 'csv',
                //     extensions: ['csv', 'txt']
                // },


                {
                    name: 'json',
                    extensions: ['json']
                }
            ],
            properties: ['openFile', 'multiSelections']
        }, fileModule.readFile);

    });

    ipc.on('export-data-from-file', function(data) {
        console.log('export-data-from-file')
        console.log(data)

        dialog.showSaveDialog({
            title: 'save the todos to a file',
            filters: [

                // {
                //     name: 'csv',
                //     extensions: ['csv', 'txt']
                // }, 

                {
                    name: 'json',
                    extensions: ['json']
                }
            ],
            //properties: ['openFile', 'multiSelections']
        }, fileModule.writeFile(data));

    });





    ipc.on('update-progress-bar', function(evt, value) {
        console.log('update-progress-bar', value)

        mainWindow.setProgressBar(value);

    });














    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        frame: true,
        resizable: true,
    });



    // remoteWindow = new RemoteWindow({
    //     width: 800,
    //     height: 600
    // });


    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');


    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function(evt) {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        console.log('closed')
        evt.preventDefault()
        mainWindow = remoteWindow = null;
    });

    mainWindow.on('close', function(evt) {
        debugger;
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        console.log('close')
            //evt.preventDefault()
        mainWindow = remoteWindow = null;
    });


    mainWindow.on('blur', function() {



    });


    mainWindow.on('focus', function() {

        console.log('focus')

    });
    mainWindow.on('move', function() {


        console.log('move')

    });
    mainWindow.on('maximize', function() {

        console.log('maximize')

    });
    mainWindow.on('minimize', function() {

        console.log('minimize')

    });





    var webContents = mainWindow.webContents;

    webContents.on('dom-ready', function() {

        console.log('Dom is ready')
    });

    webContents.on('devtools-closed', function() {
        //webContents.loadURL('http://www.google.co.in')
        console.log('devtools-closed')
    });





});
