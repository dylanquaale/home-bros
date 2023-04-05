import React from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import {useQuery, useMutation} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';
import {REMOVE_PROPERTY} from '../utils/mutations';
import Auth from '../utils/auth';
import { removePropertyId } from '../utils/localStorage';

const SavedProperties = () => {
  // use this to determine if `useEffect()` hook needs to run again
  const {loading, data} = useQuery(QUERY_ME);
  let userData = data?.me || []
  console.log(userData);
  const [removeProperty] = useMutation(REMOVE_PROPERTY)
  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteProperty = async (propertyId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { users } = await removeProperty({
        variables: {propertyId: propertyId},
      });

      userData = users;
      removePropertyId(propertyId)
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedProperties.length
            ? `Viewing ${userData.savedProperties.length} saved ${userData.savedProperties.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedProperties.map((property) => {
            return (
              <Col md="4">
                <Card key={property.bookId} border='dark'>
                  {property.image ? <Card.Img src={property.image} alt={`The cover for ${property.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{property.title}</Card.Title>
                    <p className='small'>Authors: {property.propertyId}</p>
                    <Card.Text>{property.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteProperty(property.propertyId)}>
                      Delete this Book!
                    </Button>
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

export default SavedProperties;


