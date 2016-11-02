const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 1200, height: 720 });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.openDevTools();
  mainWindow.maximize();
});

app.on('window-all-closed', () => app.quit());
