const mongoose = require('mongoose');

//MongoDB connecting to fakerproperty_db locally and for heroku to connect to Atlas database

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/fakerproperty_db",
  // FOR HEROKU: "mongodb+srv://dylanquaale:Atlas33@cluster0.qyjaiep.mongodb.net/fakerproperty_db?retryWrites=true&w=majority"
  // FOR LOCAL:  'mongodb://localhost:27017/fakerproperty_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
