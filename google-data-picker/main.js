var gui = require('nw.gui');
var App = gui.App;

App.addOriginAccessWhitelistEntry('http://www.google.com/', 'app', 'picker', true);
App.addOriginAccessWhitelistEntry('http://docs.google.com/', 'app', 'picker', true);
App.addOriginAccessWhitelistEntry('http://test.haroopress.com/', 'app', 'picker', true);

process.on('picked', function(res) {
  console.log(res);
});