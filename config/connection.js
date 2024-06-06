const mongoose = require('mongoose');
mongoose.connect(process.nextTick.MONGODB_URI ||
    'mongodb://localhost:27017/NoSQLsocials', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    module.exports = mongoose.connection
