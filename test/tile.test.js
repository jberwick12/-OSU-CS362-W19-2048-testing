const Tile = require('../js/tile.js');

test('', () =>{
  var x =0;
  expect(x).toBe(0);
});

describe('Create Tile', function() {
    test('Tile Creation', function() {
       var x = function Tile(position, value) {
        this.x                = null;
        this.y                = null;
        this.value            = value || 2;

        this.previousPosition = null;
        tmergedFrom       = null; // Tracks tiles that merged together
      };
  });
});


describe('Tile.prototype.updatePosition', function() {
    test('Tile.prototype.updatePosition', function() {

      var x = function (position) {
        this.x = position.x;
        this.y = position.y;
      };
  });
});
