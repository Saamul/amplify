import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import awsExports from './aws-exports';
// import { Amplify } from 'aws-amplify';
//import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'


import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';
import HomePage from './components/home/home';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Adverts from './components/adverts/adverts';
import AddingAdvert from './components/adverts/adding_advert';
import AuthenticationPage from './components/auth/authenticator'
// import AddingAdvert from './components/adverts/add_new';

// Amplify.configure(awsExports);

function App() {
    return ( 
        <div>
            <SiteNav />
            <Routes>
                <Route path='*' element={<HomePage />} />
                <Route path='/' exact={true} element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<AuthenticationPage />} />
                <Route path='/adverts' element={<Adverts />} />
                <Route path='/newAdvert' element={<AddingAdvert />} />
                {/* <Route path='/newAdverttest' element={<AddingAdvert1 />}  /> */}
            </Routes>
            <SiteFooter />
        </div>
    );
}

export default App;