# To-Do App

A basic To-Do app made using Electron.js for basic understanding of how menu bars work in Electron. It also handles the cross platform nature of the application. Along with that it implements the features based on the evironment(production, development, test, etc). To go through the code at each step, check out the commits in sequential order to understand how to make similar project.

## Basic blueprint of the app

- Main screen displays a list of To-do tasks

- Menu Bar which contains a file menu. File menu contains:
  - **Add a to-do menu item:** Clicking on this item pops up new window which contains a text field and a button for adding to-do task.
  - **Quit menu item:** Exits from the app.

## Getting Started

1. Install npm (if not):

    ```bash
    sudo apt install npm
    ```

2. Install dependencies:

    ```bash
    cd todo
    npm init
    npm install --save electron
    ```

3. Add electron script to package.json. Replace the existing script code to:

    ```json
    "scripts": {
    "electron": "electron ."
    }
    ```

4. Run app:

    ```bash
    npm run electron
    ```
