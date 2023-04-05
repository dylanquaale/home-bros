const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedProperties` array in User.js
const propertySchema = new Schema({
  properties: [
    {
      propertyId: {
        type: String,
        required: true,
        unique: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      bedrooms: {
        type: String,
        required: true,
      },
      bathrooms: {
        type: String,
        required: true,
      },
      squareFeet: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = propertySchema;
