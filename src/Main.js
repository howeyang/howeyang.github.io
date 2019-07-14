import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectA from "./ProjectA";
import Hidden from "@material-ui/core/Hidden";
import ProjectAutoBattler from "./ProjectAutoBattler";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Hidden xsDown>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Project">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/About">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </Hidden>
        <Hidden smUp> 
        <div className="topbar">
        <div className="barbutton">Idea, start with Menu, on click, animate down 4 buttons</div>
        <div className="barbutton">test</div>
        </div>
        </Hidden>

        <div className="content">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Project" component={ProjectPage} />
          <Route exact path="/About" component={AboutPage} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/Project/ProjectA" component={ProjectA} />
          <Route exact path="/Project/ProjectAutobattler" component={ProjectAutoBattler} />
        </div>
        <footer className="footer">From the North: Toronto, Canada</footer>
      </HashRouter>
    );
  }
}

export default Main;
