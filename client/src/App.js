import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { setContext } from "@apollo/client/link/context";
import SavedProperties from "./pages/Saved";
import PrimarySearchAppBar from "./components/Navbar";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/Signup";
import Home from "./pages/Home";
import CustomFooter from "./components/Footer";
import theme from "./components/Theme";



const httpLink = createHttpLink({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
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
        <GlobalStyles />
          {/* <div style={{ backgroundImage: `url(${HomeThemeImage}` }} className="root"> */}
            <Router>
              <PrimarySearchAppBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/saved" element={<SavedProperties />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Router>
          {/* </div> */}
          <CustomFooter />
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  );
}

export default App;
