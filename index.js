// Importing Dependencies
const electron = require('electron');

// Getting the properties from dependencies using destructuring
const { app, BrowserWindow, Menu } = electron;

// Defining main window
let mainWindow;

// Event handling: Triggers when app is ready
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/main.html`); // load main HTML window

    // Adding menu to the app
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

// Template used to make menu
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New Todo'
            }
        ]
    }
]