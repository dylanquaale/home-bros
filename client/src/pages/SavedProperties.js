import React from 'react';
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_PROPERTY } from '../utils/mutations';
import Auth from '../utils/auth';
import { removePropertyId } from '../utils/localStorage';

const SavedProperties = () => {
    const { loading, data } = useQuery(QUERY_ME);
    let userData = data?.me || [];
    console.log(userData);
    const [removeProperty] = useMutation(REMOVE_PROPERTY);

    const handleRemoveProperty = async (propertyId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { users } = await removeProperty({
                variables: { propertyId: propertyId },
            });

            userData = users;
            removePropertyId(propertyId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
        <div fluid className = "text-light bg-dark p-5">
            <Container>
                <h1>Viewing saved properties!</h1>
            </Container>
        </div>
        <Container>
            <h2 className="pt-5">
                {userData.savedProperties.length
                    ? `Viewing ${userData.savedProperties.length} saved ${userData.savedProperties.length === 1 ? 'property' : 'properties'}:`
                    : 'You have no saved properties!'}
            </h2>
            <Row>
                {userData.savedProperties.map((property) => {
                    return (
                        <Col md="4">
                            <Card key={property.propertyId} border="dark">
                                {property.image ? <Card.Img src={property.image} alt={`The cover for ${property.address}`} variant="top" /> : null}
                                <Card.Body>
                                    <Card.Title>{property.address}</Card.Title>
                                    <p className="small">address: {property.address}</p>
                                    <p className="small">city {property.city}</p>
                                    <p className="small">state: {property.state}</p>
                                    <p className="small">zip: {property.zip}</p>
                                    <p className="small">price: {property.price}</p>
                                    <p className="small">bedrooms: {property.bedrooms}</p>
                                    <p className="small">bathrooms: {property.bathrooms}</p>
                                    <p className="small">square feet: {property.squareFeet}</p>
                                    <Button className="btn-block btn-danger" onClick={() => handleRemoveProperty(property.propertyId)}>
                                        Delete this Property!
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