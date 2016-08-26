# electron-tray-test
Testing out Tray API in Electron, showing Tray click event behavior

To try out:

```
npm install
npm run start
```

Upon running the app, you will see a heart icon in the menu bar / tray.

If the `lazyMenu` boolean was set to `false`, the contextMenu is attached
to the Tray on startup. Now, if you click on it in various ways,
notice how nothing is printed in the terminal.  This is expected behavior.
(See issue electron/electron#4796)

If the `lazyMenu` boolean was set to `true`, then it is up to the `click`
and `right-click` Tray event handlers to call `tray.popUpContextMenu()`.

In `main.js`, there are the following block of event handlers:
```
tray.on('click', function() {
    console.log("tray click");
});
tray.on('right-click', function() {
    console.log("tray right-click");
});
tray.on('double-click', function() {
    console.log("tray double-click");
});
```

Note that on Mac OS X, only the 'right-click' event is fired when
using an external mouse, not from ctrl-click on a trackpad.
