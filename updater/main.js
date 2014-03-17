var download = require('download');

function update(version, path) {
  var file = 'https://github.com/rhiokim/haroopad-locales/archive/'+ version +'.tar.gz';
  var o = download(file, path, { extract: true, strip: 1 });
  o.on('close', function() {
    alert('complete');
  });
}

update('for-v0.10.0', 'bar');
