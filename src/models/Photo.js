const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    mime_type: {
      type: String
    },
    photo: {
        type: String
    },
    photo_id: {
        type: Number,
        default: 0
    }
});

const Photos = mongoose.model('photos', photoSchema);

module.exports = Photos;
