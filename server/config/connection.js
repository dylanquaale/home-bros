const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://dylanquaale:Atlas33@cluster0.qyjaiep.mongodb.net/fakerproperty_db?retryWrites=true&w=majority;",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
