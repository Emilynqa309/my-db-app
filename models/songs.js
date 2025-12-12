const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
    song: String,
    artists: String,
});

module.exports = mongoose.model('Songs', songsSchema);