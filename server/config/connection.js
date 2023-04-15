const mongoose = require('mongoose');
// This is our Heroku connection string
const MONGODB_HEROKU = "mongodb+srv://dylanquaale:Atlas33@cluster0.qyjaiep.mongodb.net/fakerproperty_db?retryWrites=true&w=majority";
// Our local connection string
const MONGODB_LOCAL = "mongodb://localhost:27017/fakerproperty_db";
// First, check if the MONGODB_URI environment variable is set
const MONGODB_URI = process.env.MONGODB_URI;
// If MONGODB_URI is set, use it, otherwise, use the Heroku connection string as a fallback for the site, and if that's not set, use the local connection string for the site instead
const connectionString = MONGODB_URI || MONGODB_HEROKU || MONGODB_LOCAL;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose.connection;