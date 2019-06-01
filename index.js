// Importing Dependencies
const electron = require('electron');

// Getting the properties from dependencies using destructuring
const { app, BrowserWindow, Menu } = electron;

// Defining main window and additional window
let mainWindow;
let addWindow;

// Event handling: Triggers when app is ready
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/main.html`); // load main HTML window
    mainWindow.on('closed', () => app.quit()); // closes any other window when the main window is closed

    // Adding menu to the app
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

// Function to create new window for adding todos
function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add New To Do',
        webPreferences: {
            nodeIntegration: true
        }
    });
    addWindow.loadURL(`file://${__dirname}/addtodo.html`);
}

// Template used to make menu
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New Todo',
                click() { createAddWindow(); }
            },
            {
                label: 'Quit',

                // Associating shortcut key to Quit using ternery expression, can use immediately invoked function or string too
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',

                // triggers on clicking quit
                click() {
                    app.quit();
                }
            }
        ]
    }
];

// If the platform is Mac(darwin) add different menu template to handle the first menu name
if (process.platform === 'darwin') {
    menuTemplate.unshift({}); // unshift: Adds the arg to start of the template
}

// Don't show developer tools in production env only
if(process.env.NODE_ENV !== 'production'){
    menuTemplate.push({
        label: 'Developer',
        submenu: [
            {
                label: 'Toggle Developer Tools',

                // hotkey association
                accelerator: process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',

                // event handling for label
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    });
}
