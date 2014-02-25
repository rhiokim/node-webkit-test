var Font = require('font');

var fonts = Font.listFonts();
var key, ext, fontName;

fonts = fonts.filter(function(font) {
  ext = font.split('.')[1];
  return (ext == 'ttc') || (ext == 'ttf') || (ext == 'otf')
});

$(document.body).ready(function() {
  var el = document.querySelector('select[name=fonts]');
  var optEl;

  fonts.forEach(function(font) {
    optEl = document.createElement('option');
    optEl.setAttribute('value', font);
    optEl.innerHTML = font;
    el.appendChild(optEl);
  });

  $(el).on('change', function(e) {
    var font = $(this).val();

    font = font.split('.')[0];
    font = font.split('-')[0];

    $('#ds').text('p { font-family: "'+ font +'" }');
  });
});

