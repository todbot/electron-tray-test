const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'icon.png');
let tray = null;
let win = null;

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  tray = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Item1',
      type: 'radio',
      icon: iconPath
    },
    {
      label: 'Item2',
      submenu: [
        { label: 'submenu1' },
        { label: 'submenu2' }
      ]
    },
    {
      label: 'Item3',
      type: 'radio',
      checked: true
    },
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() {
        win.show();
        win.toggleDevTools();
      }
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  tray.on('click', function() {
      console.log("tray click");
  });
  tray.on('right-click', function() {
      console.log("tray right-click");
  });
  tray.on('double-click', function() {
      console.log("tray double-click");
  });
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
});
