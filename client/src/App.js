import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { setContext } from '@apollo/client/link/context';
import SavedProperties from './pages/SavedProperties';
import PrimarySearchAppBar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import Home from "./pages/Home"
import CustomFooter from './components/Footer';
import theme from './components/Theme';

const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache(),
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
    <ApolloProvider client={client}>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <div className="flex-column justify-center align-center min-100-vh bg-primary justify-content: space-between background">
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
                  element={<SavedProperties />} />
                <Route
                  path="*"
                  element={<Home />} />
                  {/* redirects to Home Page If wrong parameters are written */}
              </Routes>
            </Router>
          </div>
          <CustomFooter />
        </ThemeProvider>
      </StyledEngineProvider >
    </ApolloProvider>
  );
}

export default App;
