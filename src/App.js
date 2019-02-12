import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
// import createHashHistory from "history/createHashHistory";

// const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <React.Fragment>
            <Route
              exact
              path="/"
              render={props => (
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="#/about"
                    rel="noopener noreferrer"
                  >
                    About
                  </a>
                </header>
              )}
            />

            <Route
              path="/about"
              render={props => (
                <React.Fragment>
                  <h1>About</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eleifend viverra rhoncus. Praesent at sapien ut ex
                    lobortis interdum. Integer nec dapibus purus. Nulla
                    facilisi. Curabitur euismod semper pulvinar. In consequat
                    varius augue, eget aliquam erat tincidunt ac. Nullam dictum
                    nisl sed sapien lobortis pharetra.
                  </p>
                </React.Fragment>
              )}
            />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
