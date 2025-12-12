var express = require('express');
var router = express.Router();
const songs = require('../models/songs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', async function(req,res) {
    try{
      const Songs = await songs.find()
      res.json(Songs);
    } catch (error) {
      console.log(error);
    }

})
module.exports = router;
