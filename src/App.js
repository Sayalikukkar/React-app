import React from 'react';
import './App.css';
import Navbar from './components/inc/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/inc/footer'



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
