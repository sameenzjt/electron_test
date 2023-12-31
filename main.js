const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () =>{
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
          }
    })
    mainWindow.loadFile('index.html')

}


app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('active', () => {
    createWindow()
})

app.on('ready', () => {
    console.log('应用准备好了')
})