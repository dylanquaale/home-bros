import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import {SAVE_PROPERTY} from '../utils/mutations'
import { savePropertyIds, getSavedPropertyIds } from '../utils/localStorage';

const SearchBooks = () => {

  // create state for holding returned google api data
  const [searchedProperties, setSearchedProperties] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedPropertyIds, setSavedPropertyIds] = useState(getSavedPropertyIds());
  const [saveProperty, {error}] = useMutation(SAVE_PROPERTY)

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savePropertyIds(savedPropertyIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://zillow56.p.rapidapi.com/search?location=${searchInput}`
      )

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const propertyData = items.map((property) => ({
        propertId: property.id,
        title: property.volumeInfo.title,
        description: property.volumeInfo.description,
        image: property.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedProperties(propertyData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveProperty = async (propertyId) => {
    // find the book in `searchedBooks` state by the matching id
    const propertyToSave = setSearchedProperties.find((property) => property.propertyId === propertyId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const {data} = await saveProperty({
        variables: {propertyData: {...propertyToSave}}
      })

      console.log(savedPropertyIds)

      // if book successfully saves to user's account, save book id to state
      setSavedPropertyIds([...savedPropertyIds, propertyToSave.propertyId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>

      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Property!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a Property'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedProperties.length
            ? `Viewing ${searchedProperties.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <Row>
          {searchedProperties.map((property) => {
            return (
              <Col md="4" key={property.bookId} >
                <Card key={property.propertyId} border='dark'>
                  {property.image ? (
                    <Card.Img src={property.image} alt={`The cover for ${property.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{property.title}</Card.Title>
                    <p className='small'>Authors: {property.propertyId}</p>
                    <Card.Text>{property.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedPropertyIds?.some((savedPropertyId) => savedPropertyId === property.propertyId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveProperty(property.propertyId)}>
                        {savedPropertyIds?.some((savedPropertyId) => savedPropertyId === property.propertyId)
                          ? 'This book has already been saved!'
                          : 'Save this Book!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchBooks;
