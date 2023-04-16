// import the User from user file
const User = require('./User');

// import the Property property file
const Property = require('./Property');

// exports the user and property modules, this means that any module that imports this object can access both the User and Property modules through it.
module.exports = { User , Property };
