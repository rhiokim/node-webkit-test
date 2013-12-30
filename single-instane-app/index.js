function lazy() {
  var gui = require('nw.gui');
  gui.App.on('open', function(cmdline) {
    console.log("cmdline: ", cmdline);
  });
}
