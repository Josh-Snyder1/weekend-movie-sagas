const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  
  const sqlQuery = `SELECT * FROM genres;`;

  pool.query(sqlQuery)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: cannot get all genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;