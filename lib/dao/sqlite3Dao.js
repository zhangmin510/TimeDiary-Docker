var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run('CREATE TABLE timediary (content TEXT)');

  var stmt = db.prepare('INSERT INTO timediary VALUES(?)');
  for (var i = 0; i < 10; i++) {
	stmt.run('zm ' + i);
  }
  stmt.finalize();

  db.each('SELECT rowid AS id, content FROM timediary', function(err, row) {
    console.log(row.id + ' : ' + row.content);
  });
});

db.close();
