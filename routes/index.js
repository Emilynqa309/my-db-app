var express = require('express');
var router = express.Router();
const songs = require('../models/songs');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
        const users = await songs.find();
        res.render('index', { title: 'Current Favorite Songs', song: Songs });
      } catch (error) {
        console.log(error);
      }
});

module.exports = router;
