import React from 'react';
import { faker } from '@faker-js/faker';

const generateFakeProperty = () => {
  return {
    propertyId: faker.datatype.uuid(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipcode: faker.address.zipCode(),
    price: faker.datatype.number({ min: 100000, max: 1000000 }),
    price: faker.finance.amount(100000, 1000000, 2),
    bedrooms: faker.datatype.number({ min: 1, max: 5 }),
    bathrooms: faker.datatype.number({ min: 1, max: 5 }),
    squareFeet: faker.datatype.number({ min: 1000, max: 5000 }),
    image: faker.image.imageUrl(640, 480, 'realestate', true, true),
    link: faker.internet.url(),
  };
};

export default function PropertyList() {
  const properties = [];

  for (let i = 0; i < 20; i++) {
    properties.push(generateFakeProperty());
  }

  return (
    <div>
      {properties.map((property) => (
        <div key={property.propertyId}>
          <h2>{property.address}</h2>
          <p>{property.city}, {property.state} {property.zipcode}</p>
          <p>Price: ${property.price.toLocaleString()}</p>
          <p>{property.bedrooms} bedrooms, {property.bathrooms} bathrooms</p>
          <p>{property.squareFeet.toLocaleString()} sqft</p>
          <img src={property.image} alt="Property" />
          <p><a href={property.link}>View Details</a></p>
        </div>
      ))}
    </div>
  );
}