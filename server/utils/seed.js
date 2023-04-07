const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose")
const Product = require("../models/model")

async function seedData() {
    // Connection URL
    const uri = "mongodb://localhost:27017/fakerproperty_db";
    const seed_count = 2;
    let timeSeriesData = [];
    // create 200 fake data
    for (let i = 0; i < seed_count; i++) {
        const address = faker.address.streetAddress();
        const city = faker.address.city();
        const state = faker.address.stateAbbr();
        const zipcode = faker.address.zipCode();
        const price = faker.datatype.number({ min: 100000, max: 1000000 });
        const bedrooms = faker.datatype.number({ min: 1, max: 5 });
        const bathrooms = faker.datatype.number({ min: 1, max: 5 });
        const squareFeet = faker.datatype.number({ min: 1000, max: 5000 });
        const image = faker.image.imageUrl(640, 480, 'realestate', true, true)
        timeSeriesData.push({ address, city, state, zipcode, price, bedrooms, bathrooms, squareFeet, image });
    }

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    await Product.insertMany(timeSeriesData);
    mongoose.connection.close();
}

seedData()