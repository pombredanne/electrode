'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function () {
    // Initialize a new Electron window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // Load the index page
    mainWindow.loadUrl('http://localhost:4040/Andy');
});
