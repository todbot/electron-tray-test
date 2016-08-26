# electron-tray-test
Testing out Tray API in Electron, showing how click event does not work on MacOSX

To try out:
1.
```
npm install
npm run start
```
2. In the menu bar / tray, you will see a heart icon.
Click on it in various ways, notice how nothing happens in the terminal


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

On Mac OS X 10.11.6, none of the events are fired using the trackpad,
only the 'right-click' event is fired when using an external mouse.
