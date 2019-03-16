const grid = require('../js/grid.js');

describe('Create Grid', function() {
    test('Grid', function() {
       var x = function Grid(size, previousState) {
         this.size = size;
         this.cells = previousState ? this.fromState(previousState) : this.empty();
       }
       expect(x).toEqual(x);
  });
});

describe('Grid.prototype.fromState', function() {
    test('Grid.prototype.fromState', function() {
      var x = function (state) {
        var cells = [];

        for (var x = 0; x < this.size; x++) {
          var row = cells[x] = [];

          for (var y = 0; y < this.size; y++) {
            var tile = state[x][y];
            row.push(tile ? new Tile(tile.position, tile.value) : null);
          }
        }
        return cells;
      }
       expect(x).toEqual(x);
  });
});


describe('Find the first available random position', function() {
    test('find grid position', function() {
       var x = function () {
         var cells = null;
         if (cells.length) {
           return cells[Math.floor(Math.random() * cells.length)];
         }
       };
       expect(x).toEqual(x);
  });
});

describe('Create Grid', function() {
    test('Grid', function() {
       var x = function () {
         var cells = [];

         this.eachCell(function (x, y, tile) {
           if (!tile) {
             cells.push({ x: x, y: y });
           }
         });

         return cells;
       };
       expect(x).toEqual(x);
  });
});

describe('Call callback for every cell', function() {
    test('callback for every cell', function() {
       var x = function (callback) {
         for (var x = 0; x < this.size; x++) {
           for (var y = 0; y < this.size; y++) {
             callback(x, y, this.cells[x][y]);
           }
         }
       }
       expect(x).toEqual(x);
  });
});

describe('Grid.prototype.cellsAvailable', function() {
    test('Grid.prototype.cellsAvailable ', function() {
       var x =  function () {
         return !!this.availableCells().length;
       };
       expect(x).toEqual(x);
  });
});

describe('// Check if the specified cell is taken', function() {
    test('Grid', function() {
       var x =  function (cell) {
         return !this.cellOccupied(cell);
       };
       expect(x).toEqual(x);
  });
});

describe('Grid.prototype.cellOccupied', function() {
    test('Grid', function() {
       var x = function (cell) {
         return !!this.cellContent(cell);
       }
       expect(x).toEqual(x);
  });
});

describe('Grid.prototype.cellContent', function() {
    test('Grid', function() {
       var x = function (cell) {
         if (this.withinBounds(cell)) {
           return this.cells[cell.x][cell.y];
         } else {
           return null;
         }
       }
       expect(x).toEqual(x);
  });
});
