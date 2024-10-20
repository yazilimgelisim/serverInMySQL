const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.DB_HOST
const user = process.env.DB_USER 
const password = process.env.DB_PASSWORD 
const database = process.env.DB_NAME


const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});


const conn = () => {
  connection.connect((err) => {
    if (err) {
      console.log(`DB Connection Error: ${err.stack}`);
      return;
    }

    console.log(`DB Connected`);
  })
}


module.exports = {conn, connection};