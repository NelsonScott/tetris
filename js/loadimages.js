(function(){

  Tetris.Sprite = function(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  Tetris.Sprite.prototype.draw = function(ctx, x, y) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
      x, y, this.width, this.height);
  };

  Tetris.initMainTiles = function(img) {
    Tetris.borderBlock = new Tetris.Sprite(img, 0, 0, Tetris.TILESIZE, Tetris.TILESIZE);
    Tetris.bgBlock = new Tetris.Sprite(img, 16, 0, Tetris.TILESIZE, Tetris.TILESIZE);
  };

})();