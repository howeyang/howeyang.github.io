import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Hidden from "@material-ui/core/Hidden";
import MobileBar from "../Components/MobileBar";
import NoMatch from "./NoMatch";
import Grid from "@material-ui/core/Grid";
import PageWork from "./PageWork";
import PagePersonal from "./PagePersonal";
import PageResume from "./PageResume";
import PageBattleRun from "./PageBattleRun";
import PageCozyCafe from "./PageCozyCafe";
import PageBeatBoss4 from "./PageBeatBoss4";

import PageBeach from "../Projects/ProjectBeachWave";
import PageFire from "../Projects/ProjectFire";

class Main extends Component {
  state = {
    class: "header invisiblenav"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 10) {
      this.setState({ class: "header visiblenav" });
    } else {
      this.setState({ class: "header" });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <HashRouter>
        <Hidden smDown>
          <ul className={this.state.class}>
            <li>
              <NavLink exact to="/" className ="">
              <div className=""> Home </div> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/Work" className ="">
              <div className=""> Experience </div> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/Personal" className ="">
              <div className=""> Personal </div> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/Resume" className ="">
              <div className=""> Resume  </div> 
              </NavLink>
            </li>
          </ul>
        </Hidden>
        <Hidden mdUp>
          <MobileBar></MobileBar>
          <div className="headerPadding"></div>
        </Hidden>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          className="landingContainer"
        >
        
      <div className="repeatingDotPattern"></div>
        <div className="gradientBackground">
        </div>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="forceHeight"
          >
            <div className="content">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Work" component={PageWork} />
                <Route exact path="/Personal" component={PagePersonal} />
                <Route exact path="/Resume" component={PageResume} />
                <Route exact path="/BattleRun" component={PageBattleRun} />
                <Route exact path="/CozyCafe" component={PageCozyCafe} />
                <Route exact path="/BeatBoss4" component={PageBeatBoss4} />
                
                <Route exact path="/PageBeach" component={PageBeach} />
                <Route exact path="/PageFire" component={PageFire} />
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
