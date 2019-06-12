import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Archive from './components/Archive';
import Footer from './components/Footer';
import CodeOfConduct from './components/CodeOfConduct';

function App() {
  return (
    <Router>
      <div className="App rainbow-text">
        <Header />
        <div className="page-contents">
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              />
            <Route
              exact
              path="/archive"
              component={Archive}
            />
            <Route
              exact
              path="/code-of-conduct"
              component={CodeOfConduct}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
