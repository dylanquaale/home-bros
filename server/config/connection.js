// Import the mongoose module 
const mongoose = require('mongoose');


// Connect to MongoDB database and export the connection object
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/fakerproperty_db",
  // FOR HEROKU: "mongodb+srv://dylanquaale:Atlas33@cluster0.qyjaiep.mongodb.net/fakerproperty_db?retryWrites=true&w=majority"
  // FOR LOCAL:  'mongodb://localhost:27017/fakerproperty_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//export the module mongoose.connection
module.exports = mongoose.connection;
