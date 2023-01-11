const ActiveDirectory = require('activedirectory');
const { pool } = require('../dbconfig');

module.exports = (req, res) => {
  
  //Check Body Is Empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
       return;
  }
//Check Element Count
  if(Object.keys(req.body).length != 2) {
    res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
       return;
  }

  
  var config = { url: 'ldaps://col-dc-01.brandixlk.org:636',
               baseDN: 'dc=domain,dc=com',
               username: req.body.username.toLowerCase(),
               password: req.body.password,
               tlsOptions: {
                rejectUnauthorized: false
              } };

    var ad = new ActiveDirectory(config);
    var username = req.body.username.toLowerCase();
    var password = req.body.password;
    // Authenticate
   ad.authenticate(username, password, function(err, auth) {
        if (err) {
            
            res.status(200).json({ Type: "ERROR", Msg : "Oops! User Details are not valid. Please Try again!"});
            return;
        }
        else
        {
          if (auth) {

            var sqlqry = `SELECT * FROM user_master WHERE lower(uname)='${username}' AND uactive='true';`;

            pool.query(sqlqry, (error, results) => {
              if (error) {
                res.status(200).json({ Type: "ERROR", Msg: error.message })
                return;
              }
              else {
                if(results.rows.length === 1)
                {
                  res.status(200).json({ Type: "SUCCESS", Data: results.rows })
                  return;
                }
                else
                {
                  res.status(200).json({ Type: "ERROR", Msg: "User not found in our system." })
                  return;
                }
                
              }
          
            })
            
          }
          else {
            
            res.status(200).json({ Type: "ERROR", Msg : "User Not Found. Please Check your Username and Password Again"});
            return;
          }
        }
        
    });

  };