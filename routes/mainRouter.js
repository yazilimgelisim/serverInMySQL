const express = require('express');
const { join } = require('path');
const router = express.Router();
const { connection } = require(join(__dirname, '..', 'db.js'));



router.get('/', (req, res) => {
  try {
    connection.query('select * from film where length=72', (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.render('site/main', {
        posts:results
      });

    })
  } catch (error) {
    console.log(error);
    return res.render('errors/404');
  }
})


module.exports = router