function log(msg) {
  $('#result').html(msg);
}

$(document.body).ready(function() {
  // var PouchDB = require('pouchdb');

  var PouchDB = require('pouchdb');
  var path = require('path');

  var baseDir;

  switch(process.platform) {
    case 'win32':
      baseDir = 'Z:\\Works\\free\\node-webkit-test\\pouchdb';
    break;
    case 'linux':
      baseDir = '';
    break;
    default:
      baseDir = '/Users/rhio/Works/free/node-webkit-test/pouchdb';
    break;
  }
  var dbname = path.join(baseDir, 'data', 'haroopad2');
  var db = new PouchDB(dbname, {
    adapter: 'leveldb'
  });

  // var remoteCouch = 'https://localhost:6984/'+ dbname;
  var remoteCouch = "http://rhiokim:1@localhost:5984/rhiokim2";
  var opts = {continuous: true, complete: function() {
    alert('done');
  }};

  function createDesignDoc(name, mapFunction) {
    var ddoc = {
      _id: '_design/' + name,
      views: {}
    };
    ddoc.views[name] = {
      map: mapFunction.toString()
    };
    return ddoc;
  }

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
  $('#_view').click(function(e) {
    var designDoc = createDesignDoc('by_month', function(doc) {
      if (doc.trash != true) {
        var d = new Date(doc.updated_at);
        var keys = [ d.getFullYear(), d.getMonth() + 1, d.getDate() ];

        emit(keys, doc);
      }
    });

    db.put(designDoc).then(function(doc) {
      // design doc created!
      alert('success')
    }).catch(function(err) {
      alert('exist')
      // if err.name === 'conflict', then
      // design doc already exists
    });
  })
});

