// Imports the User model and signToken utility function
const { User } = require('../models');
const { signToken } = require('../utils/auth');

// Defining the module exports as an object that contains the controller function
module.exports = {
  // Controller function to get a single user by their ID or username
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
    
        res.json(foundUser);
      },

// Controller function to create a new user in the databse and returns a signed JWT token.
      async createUser({ body }, res) {
        const user = await User.create(body);
    
        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
      },

// Controller function to handle user login which authenticates a user using their email or username and password ,finally returning a signed JWT token upon successful authentication.
      async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
    
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });

        if (!user) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
          }
          return res.json(user);
      },

// Controller function to save a property to the user's savedProperties array
      async saveProperty({ user, body }, res) {
        
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedProperties: body } },
            { new: true }
          );
          return res.json(updatedUser);
        } catch (err) {
          console.log(err);
          res.status(400).json(err);
        }
      },

// Controller function to remove a property from the user's savedProperties array
      async removeProperty({ user, params }, res) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedProperties: { propertyId: params.propertyId } } },
          { new: true }
        );
        if (!updatedUser) {
          return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
      },
};