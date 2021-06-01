import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/styles.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/home';
import Aboutuspage from './pages/aboutus';
import { ProductsPage } from './pages/products';
import { Offsetcontext } from './context';
import { useEffect, useState } from 'react';


function App() {
 
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset);
  
  useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }
  ,[]);

  return (
    <>
   
    <Router basename="/">
      <Switch>
      <Offsetcontext.Provider value={offsetY}>
        <Route path="/aboutus">

          <Aboutuspage />
        </Route>
        
        <Route path="/contactus">
          
        </Route>
        
        <Route path="/products">
          <ProductsPage />
        </Route>
        
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route >
          <Redirect to="/" />
        </Route>
      </Offsetcontext.Provider>
      </Switch>
    </Router>
    </>
  );
}

export default App;
