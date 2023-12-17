import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Hidden from "@material-ui/core/Hidden";
import MobileBar from "../Components/MobileBar";
import NoMatch from "./NoMatch";
import Grid from "@material-ui/core/Grid";
import PageBattleRun from "./PageBattleRun";
import PageCozyCafe from "./PageCozyCafe";
import PageResume from "./PageResume";

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
        <Hidden xsDown>
          <ul className={this.state.class}>
            <li>
              <NavLink exact to="/" className ="">
              <div className=""> About<br></br> Me </div> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/BattleRun" className ="">
              <div className=""> Work <br></br>Experience </div> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/CozyCafe" className ="">
              <div className=""> Personal <br></br> Projects </div> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/Resume" className ="">
              <div className=""> Resume <br></br> Info </div> 
              </NavLink>
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
                <Route exact path="/BattleRun" component={PageBattleRun} />
                <Route exact path="/CozyCafe" component={PageCozyCafe} />
                <Route exact path="/Resume" component={PageResume} />
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
