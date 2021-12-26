const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    city: {
      type: String
    },
    game_id: {
        type: Number
    },
    year: {
        type: Number
    }
});

const Games = mongoose.model('games', gameSchema);

module.exports = Games;
