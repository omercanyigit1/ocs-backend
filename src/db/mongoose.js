const mongoose = require('mongoose');

mongoose.connect(`dburl`, {
    useNewUrlParser: true,
    useCreateIndex: true
});
