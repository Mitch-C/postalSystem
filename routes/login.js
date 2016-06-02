var express = require('express');
var router = express.Router();
var pg = require('pg');
var database = "postgres://postgres:admin@localhost:5432/kps";

var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
    

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/query', function (req, res, next) {
  elogin = req.query.username;
  epassword = req.query.password;
  
  


	pg.connect(database, function(err, client, done)
  {
    if (err)
    {
      console.error('Could not connect to the database');
      console.error(err);
      return;
    }
    console.log('Connected to the database');
    client.query('SELECT * FROM Users',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');

  console.log(rows);
  console.log(rows.length);
  console.log(rows.size);
  console.log(rows.rows.length);
  match = -1;
  for(i = 0;i<rows.rows.length;i++){
  if(elogin == rows.rows[i].username && epassword ==rows.rows[i].password){
  
    match = i;
    console.log('WE HAVE A MATCH');
    //res.redirect('/index');
    //return;
  } 
  }
 if(match == -1){
	 console.log('NO MATCH');
     res.redirect('/404');
 }
 else{
//logged in table stuff starts
    client.query('UPDATE Loggedin SET Uid= '+(match+1)+' WHERE Rowide = 1',function(errr,resu){
      if(errr) {throw errr;}
      console.log("loginid = "+resu);
     // localStorage.setItem("username",username);
     // localStorage.setItem("lin",'no');
      res.redirect('/index');
      return;
    });
    //logged in table stuff ends
 }

});
  });
 
});

module.exports = router;
