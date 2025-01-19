import { app, BrowserWindow } from 'electron';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
          preload: join(__dirname, 'preload.js'),
          contextIsolation: true,
          enableRemoteModule: false,
          webSecurity: false,
          devTools: false
        },
    });

    // Usa file:// protocol para cargar el index.html
    const indexPath = join(__dirname, 'dist', 'index.html');
    mainWindow.loadFile(indexPath);

    // Habilita la navegación a través de file://
    mainWindow.webContents.on('will-navigate', (event, url) => {
        if (!url.startsWith('file://')) {
            event.preventDefault();
        }
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
