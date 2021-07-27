import 'bootstrap/dist/css/bootstrap.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/styles.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Suspense} from 'react';
import { Offsetcontext } from './context';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/js/bootstrap.js';
import { Footer } from './components/footer';
import { Spinner } from './utils/spinner';
import React from 'react';
const HomePage =  React.lazy(() => import('./pages/home'));
const Aboutuspage =  React.lazy(() => import('./pages/aboutus'));
const Contactuspage =  React.lazy(() => import('./pages/contactus'));
const ProductsPage =  React.lazy(() => import('./pages/products'));
const Thankyoupage = React.lazy(() => import('./pages/thankyou'));


function App() {
 
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset);
  
  useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }
  ,[]);

  return (
    <Suspense fallback={<Spinner />}>
   
    <Router //basename="/"
    >
      <Switch>
      <Offsetcontext.Provider value={offsetY}>
        <Route path="/aboutus">
          <Aboutuspage />
        </Route>
        
        <Route path="/contactus">
          <Contactuspage />
        </Route>
        
        <Route path="/products">
          <ProductsPage />
        </Route>
        
        <Route exact path="/thankyou">
          <Thankyoupage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

      </Offsetcontext.Provider>
      </Switch>
      <Footer />
    </Router>
    </Suspense>
  );
}

export default App;
