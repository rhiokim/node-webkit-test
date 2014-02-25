var Canvas = require('canvas');
var Image = Canvas.Image;
var QR = require('jsqrcode')(Canvas);

window.ondrop = function(e) {
  console.log(e);
  e.preventDefault();
};
