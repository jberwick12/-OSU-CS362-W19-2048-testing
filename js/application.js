// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
   var x = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
   console.log(x);
});
