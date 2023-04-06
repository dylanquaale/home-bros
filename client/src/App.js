import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PrimarySearchAppBar from './components/Navbar';
import HomeReviewCardUno from './components/HouseCardUno';
// import CustomFooter, { CustomFooterStatusComponent } from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<PrimarySearchAppBar />}
            />
            <Route
              path="*"
              element={<HomeReviewCardUno />}
            />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
