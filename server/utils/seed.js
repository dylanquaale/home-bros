const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose")
const Property = require("../models/Property")
async function seedData() {
    // Connection URL
    const uri = "mongodb+srv://dylanquaale:Atlas33@cluster0.qyjaiep.mongodb.net/fakerproperty_db?retryWrites=true&w=majority;"
    const seed_count = 4;
    let timeSeriesData = [];
    // change seed data to match your model
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
        timeSeriesData.push({ address, city, state, zipcode, price, bedrooms, bathrooms, squareFeet, image });
    }
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await Property.insertMany(timeSeriesData);
    mongoose.connection.close();
}
seedData()