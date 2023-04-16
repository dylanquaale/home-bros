import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

// component named home uses the useQuery hook
// property card is rendered displays the users saved properties 
export default function Home() {
    const { loading, data } = useQuery(QUERY_ME);
    let userData = data?.me || [];
    return (
        <PropertyCard />
    )
}
