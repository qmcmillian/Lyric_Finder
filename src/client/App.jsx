import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './components/NavBar';
import Index from './components/Index';

import { ContextController } from './components/Context';

// import "./styles/App.css";

const App = () => {
  return (
    <ContextController>
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route
                exact path="/"
                component={Index}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ContextController>
  )
};

export default App;