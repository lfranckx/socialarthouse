import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import './styles/App.scss';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Navbar id='navbar'/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path='/contact' component={ContactForm} />
        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);