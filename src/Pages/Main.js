import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch, History } from "react-router-dom";
import LandingPage from "./LandingPage";
import Hidden from "@material-ui/core/Hidden";
import MobileBar from "../Components/MobileBar";
import NoMatch from "./NoMatch";
import Grid from "@material-ui/core/Grid";
import PageWork from "./PageWork";
import PagePersonal from "./PagePersonal";
import PageBattleRun from "./PageBattleRun";
import PageCozyCafe from "./PageCozyCafe";
import PageBeatBoss4 from "./PageBeatBoss4";
import PageBeach from "../Projects/ProjectBeachWave";
import PageFire from "../Projects/ProjectFire";

class Main extends Component {
  state = {
    class: "header invisiblenav",
    opacityCozy: 0,
    opacityBattle: 0,
    opacityBoss: 0
  };

  listenHistoryChange = e => {
    if (window.location.hash == "#/CozyCafe") {
      this.setState({ opacityCozy: 1 });
    } else {
      this.setState({ opacityCozy: 0 });
    }

    if (window.location.hash == "#/BattleRun") {
      this.setState({ opacityBattle: 1 });
    } else {
      this.setState({ opacityBattle: 0 });
    }

    if (window.location.hash == "#/BeatBoss4") {
      this.setState({ opacityBoss: 1 });
    } else {
      this.setState({ opacityBoss: 0 });
    }
  };

  listenScrollEvent = e => {
    if (window.scrollY > 10) {
      if (window.location.hash == "#/Work") {
        this.setState({ class: "header orangeNav" });
      } else if (window.location.hash == "#/CozyCafe") {
        this.setState({ class: "header pinkNav" });
      } else if (window.location.hash == "#/BeatBoss4" || window.location.hash == "#/PageFire") {
        this.setState({ class: "header redNav" });
      } else if (
        window.location.hash == "#/BattleRun" ||
        window.location.hash == "#/Personal"
      ) {
        this.setState({ class: "header greenNav" });
      } else {
        this.setState({ class: "header visiblenav" });
      }
    } else {
      this.setState({ class: "header" });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.listenScrollEvent);
    window.addEventListener("hashchange", this.listenHistoryChange);
    window.addEventListener("load", this.listenHistoryChange);
  }

  /*
          <li className="sectionContentRight">
              <NavLink to="/Resume" className="">
                <div className="centerText"> Resume </div>
              </NavLink>
            </li>
  */
  render() {
    return (
      <HashRouter>
        <Hidden smDown>
          <ul className={`${this.state.class} headerNav`}>
            <li className="sectionContentLeft">
              <NavLink exact to="/">
                <div className="centerText"> Home </div>
              </NavLink>
            </li>

            <li className="sectionContentLeft">
              <NavLink to="/Work" className="">
                <div className="centerText"> Experience </div>
              </NavLink>
            </li>

            <li className="sectionContentLeft">
              <NavLink to="/Personal" className="">
                <div className="centerText"> Personal </div>
              </NavLink>
            </li>

            <li  className="sectionContentRight">
              <NavLink to="/BeatBoss4">
                <div className="centerText"> Boss 4 </div>
              </NavLink>
            </li>

            <li className="sectionContentRight">
              <NavLink to="/BattleRun" >
                <div className="centerText"> Battle Run </div>
              </NavLink>
            </li>

            <li className="sectionContentRight">
              <NavLink exact to="/CozyCafe" >
                <div className="centerText"> Cozy Cafe </div>
              </NavLink>
            </li>

            <li>
              <div className="sectionContentMiddle"> </div>
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
          <div className="gradientBackground"></div>
          <div
            className="splashBackground gradientBattleRun"
            style={{ opacity: this.state.opacityBattle }}
          ></div>
          <div
            className="splashBackground gradientBoss"
            style={{ opacity: this.state.opacityBoss }}
          ></div>
          <div
            className="splashBackground gradientCozy"
            style={{ opacity: this.state.opacityCozy }}
          ></div>

          <Grid item xs={12} sm={12} md={12} className="">
            <div className="content paddingContainer">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Work" component={PageWork} />
                <Route exact path="/Personal" component={PagePersonal} />

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

/* Old Nav Set up

 <li>
              <NavLink exact to="/CozyCafe" className="sectionContentLeft">
                <div className="centerText"> Cozy Cafe </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/BattleRun" className="sectionContentLeft">
                <div className="centerText"> Battle Run </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/BeatBoss4" className="sectionContentLeft">
                <div className="centerText"> Boss 4 </div>
              </NavLink>
            </li>

            <li className="sectionContentRight">
              <NavLink to="/Personal" className="">
                <div className="centerText"> Personal </div>
              </NavLink>
            </li>

            <li className="sectionContentRight">
              <NavLink to="/Work" className="">
                <div className="centerText"> Experience </div>
              </NavLink>
            </li>

            <li className="sectionContentRight">
              <NavLink exact to="/">
                <div className="centerText"> Home </div>
              </NavLink>
            </li>


*/