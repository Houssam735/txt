const { PythonShell } = require('python-shell');
require('dotenv').config();
const keep_alive = require('./keep_alive.js')
PythonShell.run('main.py', null, function (err, results) {
  if (err) throw err;
  console.log('Results:', results);
});
