import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/NavBar';
import Home from './routes/Home';
import Lyrics from './routes/Lyrics';
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
                component={Home}
              />
              <Route
                exact path="/lyrics/track/:id"
                component={Lyrics}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ContextController>
  )
};

export default App;