const { pool } = require('../dbconfig');

module.exports = async (req, res) => {

  
  var sqlqry =`SELECT * FROM user_master ORDER BY uid DESC;`;

  pool.query(sqlqry, (error, results) => {
    if (error) {
      res.status(200).json({ Type: "ERROR", Msg: error.message })
      return;
    }
    else {
      res.status(200).json({ Type: "SUCCESS", Data: results.rows })
      return;
    }

  })

};