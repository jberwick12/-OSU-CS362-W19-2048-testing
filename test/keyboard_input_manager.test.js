const keyboard_test = require('../js/keyboard_input_manager.js');

describe('arrow Input', function() {
  test('up Arrow input', function(){

    var map = {
      38: 0, // Up
      39: 1, // Right
      40: 2, // Down
      37: 3, // Left
      75: 0, // Vim up
      76: 1, // Vim right
      74: 2, // Vim down
      72: 3, // Vim left
      87: 0, // W
      68: 1, // D
      83: 2, // S
      65: 3  // A
    };

      // Tested the input direction condition
      expect(map[38]).toBe(0); // up
      expect(map[39]).toBe(1); // right
      expect(map[40]).toBe(2); // down
      expect(map[37]).toBe(3); // left
      expect(map[87]).toBe(0); // w
      expect(map[68]).toBe(1); // d
      expect(map[83]).toBe(2); // s
      expect(map[65]).toBe(3); // a
  });
});
