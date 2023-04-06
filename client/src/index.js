import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import Footer from './components/Footer';
import HomeReviewCardUno from './components/HouseCardUno';
import HomeReviewCardDos from './components/HouseCardDos';
import HomeImageList from './components/HouseImages';
import HomeReviewCardTres from './components/HouseCardTres';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider>

    <App />
    <div className="flex-column justify-center align-center min-100-vh bg-primary">
    <HomeReviewCardUno />

    <HomeReviewCardDos />

    <HomeReviewCardTres />
    </div>
    <HomeImageList />
    <Footer />
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
