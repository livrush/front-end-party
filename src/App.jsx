import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Archive from './components/Archive';
import Footer from './components/Footer';

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
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
