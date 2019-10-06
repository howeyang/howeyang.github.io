import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";
import ExperiencePage from "./ExperiencePage";
import ContactPage from "./ContactPage";
import ProjectA from "../Projects/ProjectA";
import Hidden from "@material-ui/core/Hidden";
import ProjectAutoBattler from "../Projects/ProjectAutoBattler";
import ProjectSandbox from "../Projects/ProjectSandbox";
import MobileBar from "../Components/MobileBar";
import ProjectReact from "../Projects/ProjectReact";
import ProjectBeachWave from "../Projects/ProjectBeachWave";
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
              <NavLink to="/Experience">Experience</NavLink>
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
          <Route exact path="/Experience" component={ExperiencePage} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/Project/ProjectA" component={ProjectA} />
          <Route exact path="/Project/ProjectAutobattler" component={ProjectAutoBattler} />
          <Route exact path="/Project/ProjectSandbox" component={ProjectSandbox} />
          <Route exact path="/Project/ProjectReact" component={ProjectReact} />
          <Route exact path="/Project/ProjectBeachWave" component={ProjectBeachWave} />
          <Route component={NoMatch} />
          </Switch>
        </div>
        <footer className="footer"></footer>
      </HashRouter>
    );
  }
}

export default Main;
