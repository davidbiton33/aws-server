var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    success:true,
    users : [
      {
        user_name : "moshe",
        user_email:"moshe@moshe.com"
      },
      {
        user_name : "shifra",
        user_email:"shifra@shifra.com"
      }
    ]
  });
});

module.exports = router;
