const application = require('../js/application.js');
const grid = require('../js/grid.js');

describe('Create Application', function() {
    test('Application object creation', function() {
      var x = window.requestAnimationFrame(function () {
        var obj = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
        expect(obj.size).toEqual(4);
        var b = new Grid(size, previousState);
      });
  });
});
