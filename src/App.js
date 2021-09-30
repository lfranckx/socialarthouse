import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import './styles/App.scss';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ThankYou from './components/ThankYouPage';
import NotFoundPage from './components/NotFoundPage';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
      <Helmet >
        <title>Social Art House</title>
        <meta name='description' content='A pro-beauty management and creative agency, offering an expansive consulting experience for brands through ingenuity, originality and imagination.'/>
        <meta name='keywords' content='Beauty Management, Creative Agency, Consulting Firm' />
      </Helmet>
      <div className="App">
          <Navbar id='navbar'/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path='/contact' component={ContactForm} />
            <Route exact path='/thankyou' component={ThankYou} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
      </div>
    </>
  );
}

export default withRouter(App);