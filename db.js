const mysql = require('mysql');

const db = mysql.createConnection({
  host: '193.203.166.112',
  user: 'u630845697_luz',
  password: '@RamirezLzga41',
  database: 'u630845697_smartpower'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('MySQL connected');
});

// Add error event listener
db.on('error', (err) => {
  console.error('MySQL error:', err);
});

module.exports = db;
