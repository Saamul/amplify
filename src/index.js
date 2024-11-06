import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

// import { Amplify } from 'aws-amplify';
// import amplifyconfig from './amplifyconfiguration.json';

// Amplify.configure(amplifyconfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>

);