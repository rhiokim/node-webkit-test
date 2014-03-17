function log(msg) {
  $('#result').html(msg);
}

$(document.body).ready(function() {
  // var PouchDB = require('pouchdb');

  var PouchDB = require('pouchdb');

  var dbname = './data/haroopad';
  var db = new PouchDB(dbname, {
    adapter: 'leveldb'
  });

  // var remoteCouch = 'https://localhost:6984/'+ dbname;
  var remoteCouch = "http://haroopad:2w9EgmD;'hH`nyyA3qS(9`nFs@localhost:5984/haroopad";
  var opts = {continuous: true, complete: function() {
    alert('done');
  }};

  db.changes({
    onChnage: function() {
      console.log('Ch-Ch-Changes');
    }
  });

  $('#create').click(function(e) {
    db = new PouchDB(dbname, {
      adapter: 'leveldb'
    });
  });

  $('#put').click(function(e) {
    db.post({
      title: 'test-'+ Math.random(),
      create_at: Math.random()
    }, function(err, doc) {
      console.log(doc);
    });
  });

  $('#sync').click(function(e) {
    db.replicate.from(remoteCouch, opts);
    db.replicate.to(remoteCouch, opts);
  });

  $('#destroy').click(function(e) {
    PouchDB.destroy(dbname);
  });

  $('#get').click(function(e) {
    var id = prompt();
    db.get(id, function(err, doc) {
      console.log(doc);
    });
  })
  $('#getall').click(function(e) {
    db.allDocs(function(err, doc) {
      console.log(doc);
    });
  })
});

