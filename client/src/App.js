import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SavedProperties from './pages/SavedProperties';
import PropertyCard from './components/PropertyCard';
import PrimarySearchAppBar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import Home from "./components/Home"
import CustomFooter from './components/Footer';

import { StyledEngineProvider } from '@mui/material/styles';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <StyledEngineProvider>
      <ApolloProvider client={client}>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">

          <Router>
          <PrimarySearchAppBar />

            <Routes>
              <Route 
                path="/" 
                element={<Home />} />
              <Route 
                path="/signup" 
                element={<SignUpForm />} />
              <Route 
                path="/login" 
                element={<LoginForm />} />
              <Route
                path="/saved"
                element={<SavedProperties />}
              />
              <Route
                path="*"
                element={<PropertyCard />}
              />
            </Routes>
            
            <CustomFooter />

          </Router>

        </div>
      </ApolloProvider>
    </StyledEngineProvider>
  );
}

export default App;
