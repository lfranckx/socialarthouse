import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './styles/App.scss';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={'/home'} />} />
          <Route path='/home' exact component={Homepage} />

        </Switch>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
