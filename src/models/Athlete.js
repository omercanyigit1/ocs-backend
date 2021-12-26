const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    athlete_id: {
        type: String,
    },
    bio: {
        type: String,
    },
    date_of_birth: {
        type: String,
    },
    height: {
        type: Number,
        default: 0
    },
    name: {
        type: String
    },
    photo_id: {
        type: Number,
        default: 0
    },
    surname: {
        type: String
    },
    weight: {
        type: Number,
        default: 0
    },
});

const Athletes = mongoose.model('athletes', athleteSchema);

module.exports = Athletes;
