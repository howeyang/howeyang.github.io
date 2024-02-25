import React, { Component } from "react";
import CardAutobattler from "../Cards/CardAutobattler";
import CardSandbox from "../Cards/CardSandbox";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Hidden from "@material-ui/core/Hidden";
import CardReact from "../Cards/CardReact";
import CardBeach from "../Cards/CardBeach";
import CardFire from "../Cards/CardFire";
import unitylogo from "../Images/landing/unity_logo.png";
import avatar from "../Images/work/battlerun/BattleRunMain.png";
import CardProjects from "../Cards/CardProjects";
import battlerun from "../Images/work/battlerun/BattleRunMain.png";

class PageCozyCafe extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#e1771b";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientOrange");
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientOrange");
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div className="emptySpace"></div>
          <div className="titleContainer">
            <div className="landingTextContainer">
              <div className="bannerWhite">
                <div className="bannerMoveBottom">Cozy Cafe</div>{" "}
                <div className="bannerMoveTop">Mobile Game</div>
              </div>
            </div>
          </div>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
            className="centerElement"
          >
            <Grid item xs={12} sm={12} md={12} className="workSection">
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch"
                spacing={1}
                className="centerElement"
              >
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  className="section"
                >
                Image of Battle Run
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  className="section"
                >
                Producer and Developer at Game Hive
                </Grid>

                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  className="section"
                >
                Image of Cozy Cafe
                </Grid>

                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  className=""
                >
                Section Explaining Roles
                and Key Achivements
                </Grid>

                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  className=""
                >
                Project : Cozy Cafe
                Long Text explaining the game
                </Grid>

                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  className=""
                >
                Supporting Images
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default PageCozyCafe;
