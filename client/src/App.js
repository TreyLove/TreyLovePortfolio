import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from './components/Footer'
import Header from './components/Header'
// import Projects from './components/Project'
import Home from './components/Home'
// import Contact from './components/Contact'
import About from "./components/About"



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>



          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div >
      </Router>
      <Footer />
    </div>

  );
}




export default App;

