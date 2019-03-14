function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
  console.log('tile:Line8:function:previousPosition = function has been executed' );
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
  console.log('tile:Line:13:function:savePosition = function has been executed');
};


Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
  console.log('tile:Line:20:function:savePosition = function has been executed');  
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
