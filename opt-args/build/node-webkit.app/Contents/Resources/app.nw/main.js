var gui = require('nw.gui');
var optimist = require('optimist').boolean('f');
var args = optimist.parse(gui.App.argv);

// console.log(args);

gui.App.on('open', function(cmdline) {
  alert('1')
  document.body.innerHTML = cmdline;
});

window.onload = function() {
  alert('2')
  document.body.innerHTML = JSON.stringify(args);
}