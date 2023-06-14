import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';
import ContactForm from './routes/ContactPage';
import BlogList from './components/BlogPosts';
import BlogPostItem from './routes/BlogPostItem';
import ThankYou from './routes/ThankYouPage';
import NotFoundPage from './components/NotFoundPage';


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
            <Route exact path='/test'component={BlogList} />
            <Route exact path='/:postId' component={BlogPostItem} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
      </div>
    </>
  );
}

export default withRouter(App);