// Importing the dependencies for defining the User schema and handling password hashing needed. 
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Defining the User schema with properties like username, email, password, and savedProperties
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
      type: String,
      required: true,
    },

// An array of savedProperties containing ObjectIds referencing the Property model
     savedProperties: [{
      type: Schema.Types.ObjectId,
      ref: "Property"}],
  },
    {
      toJSON: {
        virtuals: true,
      },
    },
);
// Pre-save hook to hash the password using bcrypt when a new user is created or when the password is modified
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Here is our method to check if the given password matches the hashed password stored in the database
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Virtual property to get the count of saved properties for a user. Helps with Page where it says "Viewing X AMOUNT saved properties:"
userSchema.virtual('propertyCount').get(function () {
  return this.savedProperties.length;
});

// Create the User model based on the userSchema
const User = model('User', userSchema);

// Export the User model
module.exports = User;
