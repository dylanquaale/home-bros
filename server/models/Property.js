// This model will define a Mongoose schema for a property, which includes various fields such as address, city, state, zipcode, price, bedrooms, bathrooms, square footage, and the image. 

// Import the mongoose library
const mongoose = require("mongoose");

// required: true indicates these fields are mandatory and must be present in an object that is made using this schema.  
const propertySchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    squareFeet: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})
// creates the Model for Property schema. The model will be used to interact with the MongoDB and perform CRUD operations on Property documents. 
const Property = mongoose.model("Property", propertySchema)

//Export the module, "Property".
module.exports = Property;

