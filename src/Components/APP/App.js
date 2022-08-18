// Librairies
import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';


// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import ErrorPage from '../ErrorPage/ErrorPage';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Welcome from '../Welcome/Welcome';
import {IconContext} from 'react-icons';

function App() {
  return (
      <BrowserRouter>
        <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/signin" element={<Signin />}/>
              <Route path="/forgotpassword" element={<ForgotPassword />}/>
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          <Footer/>
        </IconContext.Provider>
      </BrowserRouter>
  );
}

export default App;
