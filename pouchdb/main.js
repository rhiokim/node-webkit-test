var dbname = 'haroopad';
var db = new PouchDB(dbname);

$(document.body).ready(function() {
  // var PouchDB = require('pouchdb');

  db.changes({
    onChnage: function() {
      console.log('Ch-Ch-Changes');
    }
  });

  $('#add').click(function(e) {
    db.post({
      title: 'test-'+ Math.random(),
      create_at: Math.random()
    }, function(err, doc) {
      console.log(doc);
    });
  });

  var remoteCouch = 'https://localhost:6984/haroopad';
  var opts = {continuous: true, complete: function() {
    alert('done');
  }};

  $('#sync').click(function(e) {
    db.replicate.from(remoteCouch, opts);
    db.replicate.to(remoteCouch, opts);
  });
});

