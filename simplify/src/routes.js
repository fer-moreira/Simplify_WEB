import React from 'react';

import {
  Route, 
  BrowserRouter as Router, 
  Switch
} from 'react-router-dom';

import Homepage from './components/pages/Homepage';


function Routes () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}/>
      </Switch>
    </Router>
  );
}

export default Routes;