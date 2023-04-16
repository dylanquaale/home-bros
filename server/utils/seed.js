//Import the necessary modules and functions
const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose")
const Property = require("../models/Property")

// Define an asynchronous function named seedData that seeds the database with fake property data
async function seedData() {
    // Connection URL
    const uri = "mongodb+srv://dylanquaale:Atlas33@cluster0.qyjaiep.mongodb.net/fakerproperty_db?retryWrites=true&w=majority;"
    const seed_count = 4;
    let timeSeriesData = [];
    // change seed data to match your model using Faker.js library
    for (let i = 0; i < seed_count; i++) {
        const address = faker.address.streetAddress();
        const city = faker.address.city();
        const state = faker.address.stateAbbr();
        const zipcode = faker.address.zipCode();
        const price = faker.finance.amount(100000, 1000000, 2);
        const bedrooms = faker.datatype.number({ min: 1, max: 5 });
        const bathrooms = faker.datatype.number({ min: 1, max: 5 });
        const squareFeet = faker.datatype.number({ min: 1000, max: 5000 });
        const image = faker.image.imageUrl(640, 480, 'realestate', true, true)
        // Add the generated data to an array
        timeSeriesData.push({ address, city, state, zipcode, price, bedrooms, bathrooms, squareFeet, image });
    }
    // Connect to the MongoDB database
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
     // Use the Property model to insert the seed data into the database
    await Property.insertMany(timeSeriesData);
    // Close the database connection
    mongoose.connection.close();
}
// Call the seedData function to seed the database with fake property data
seedData()