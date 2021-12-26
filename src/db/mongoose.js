const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://root:Omercan123@cluster0.nwaku.mongodb.net/OCS?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true
});
