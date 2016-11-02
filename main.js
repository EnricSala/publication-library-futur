const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.maximize();
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.openDevTools();
});

app.on('window-all-closed', () => app.quit());
