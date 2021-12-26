const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    athlete_id: {
       type: String
    },
    bronze: {
        type: Number,
        default: 0
    },
    game_id: {
        type: Number,
        default: 0
    },
    gold: {
        type: Number,
        default: 0
    },
    silver: {
        type: Number,
        default: 0
    }
});

const Results = mongoose.model('results', resultSchema);

module.exports = Results;
