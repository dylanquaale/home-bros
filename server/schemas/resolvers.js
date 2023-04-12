const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { Property } = require("../models");
const { ObjectId } = require("mongodb");

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // check if users exist
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('savedProperties');
        return userData;
      }
      throw new AuthenticationError("You Need Too Login");
    },

    properties: async () => {
      // const propertyData = await Property.find();
      return Property.find({});
    },

  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // check if user exists with email and credentials
      if (!user) {
        throw new AuthenticationError("You Wish");
      }
      const correctPassword = await user.isCorrectPassword(password);

      // check password
      if (!correctPassword) {
        throw new AuthenticationError("You Wish");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    saveProperty: async (parent, { propertyData }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedProperties: new ObjectId(propertyData)} },
          { new: true, populate: 'savedProperties' }
        );
        return updatedUser;
      }
      throw new AuthenticationError("No User Found");
    },
    
    removeProperty: async (parent, { propertyId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedProperties: { propertyId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("No User Found");
    },
  },
};

module.exports = resolvers;
