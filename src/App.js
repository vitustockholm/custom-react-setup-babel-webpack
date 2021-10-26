import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components

import Header from './components/Header';
// Pages
import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
