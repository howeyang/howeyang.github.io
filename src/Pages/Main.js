import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import LeftLandingPage from "./LeftLandingPage";
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
import ProjectFire from "../Projects/ProjectFire";
import NoMatch from "./NoMatch";
import Grid from "@material-ui/core/Grid";

class Main extends Component {
  state = {
    class: "header invisiblenav"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 1) {
      this.setState({ class: "header visiblenav" });
    } else {
      this.setState({ class: "header" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <HashRouter>
        <Hidden xsDown>
          <ul className={this.state.class}>
            <li>
              <NavLink exact to="/" className ="firstCard">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Project" className ="secondCard">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Experience" className ="thirdCard">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </Hidden>
        <Hidden smUp>
          <MobileBar></MobileBar>
        </Hidden>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          className="landingContainer"
        >
      
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="middleContainer forceHeight"
          >
            <div className="content">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Project" component={ProjectPage} />
                <Route exact path="/Experience" component={ExperiencePage} />
                <Route exact path="/Contact" component={ContactPage} />
                <Route exact path="/Project/ProjectA" component={ProjectA} />
                <Route
                  exact
                  path="/Project/ProjectAutobattler"
                  component={ProjectAutoBattler}
                />
                <Route
                  exact
                  path="/Project/ProjectSandbox"
                  component={ProjectSandbox}
                />
                <Route
                  exact
                  path="/Project/ProjectReact"
                  component={ProjectReact}
                />
                <Route
                  exact
                  path="/Project/ProjectBeachWave"
                  component={ProjectBeachWave}
                />
                <Route
                  exact
                  path="/Project/ProjectFire"
                  component={ProjectFire}
                />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Grid>
        </Grid>
        <footer className="footer"></footer>
      </HashRouter>
    );
  }
}

export default Main;
