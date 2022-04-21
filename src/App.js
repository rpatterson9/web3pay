import React ,{Suspense} from 'react';
import './App.css';
import './secure.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './components/login';
import { useUserContext } from './context/userContext';
import { useEffect } from 'react';

import Loader from './components/Loader/Loader';


const  Home = React.lazy(() => import('./components/home'));
const  VerifyEmail = React.lazy(() => import('./components/verify-email'));
const  Registration = React.lazy(() => import('./components/registration'));
const  Creators = React.lazy(() => import('./components/creators'));
const  Developers = React.lazy(() => import('./components/developers'));
const  PrivacyPolicy = React.lazy(() => import('./components/privacyPolicy'));
const  TermsOfServices = React.lazy(() => import('./components/termsOfServices'));
const  PageNotFound = React.lazy(() => import('./components/pageNotFound'));
const  LandingPage = React.lazy(() => import('./components/securePages/landingPage'));
const  ContactSupport = React.lazy(() => import('./components/contactSupport'));
const  ResetPassword = React.lazy(() => import('./components/reset-password'));
const  ForgotPassword = React.lazy(() => import('./components/forgot-password'));


const  App = () => {
  
  const location =  useLocation();
  const { user } = useUserContext();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
  
     
          <Suspense fallback={<Loader />}>
            <Routes>
            
              <Route exact path="/" element={<Home />} />
               {(user?.name) && (
                 <>
                  <Route exact path="/collection" element={<LandingPage />} />
                  <Route exact path="/transactions" element={<LandingPage />} />
                  <Route exact path="/support-requests" element={<LandingPage />} />
                 </>
                )}
          
              <Route exact path="/register" element={<Registration />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/verify-email/:token" element={<VerifyEmail />} />
              <Route exact path="/creators" element={<Creators />} />
              <Route exact path="/developers" element={<Developers />} />
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route exact path="/term-of-services" element={<TermsOfServices />} />
              <Route exact path="/support" element={<ContactSupport />} />
              <Route exact path="/reset-password" element={<ResetPassword />} />
              <Route exact path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={ <PageNotFound /> } />
            </Routes>
          </Suspense>
     
   
  );
}

export default App;
