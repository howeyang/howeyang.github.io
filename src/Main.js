import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectA from "./ProjectA";
import Hidden from "@material-ui/core/Hidden";
import ProjectAutoBattler from "./ProjectAutoBattler";
import ProjectSandbox from "./ProjectSandbox";
import MobileBar from "./MobileBar";
import ProjectReact from "./ProjectReact";
import NoMatch from "./NoMatch";


class Main extends Component {

  state = {
    class: 'header invisiblenav'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 1) {
      this.setState({class: 'header visiblenav'})
    } else {
      this.setState({class: 'header'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <HashRouter>
        <Hidden xsDown>
          <ul className={this.state.class}>
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
        <MobileBar></MobileBar>
        </Hidden>

        <div className="content">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Project" component={ProjectPage} />
          <Route exact path="/About" component={AboutPage} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/Project/ProjectA" component={ProjectA} />
          <Route exact path="/Project/ProjectAutobattler" component={ProjectAutoBattler} />
          <Route exact path="/Project/ProjectSandbox" component={ProjectSandbox} />
          <Route exact path="/Project/ProjectReact" component={ProjectReact} />
          <Route component={NoMatch} />
          </Switch>
        </div>
        <footer className="footer">From the North: Toronto, Canada</footer>
      </HashRouter>
    );
  }
}

export default Main;
