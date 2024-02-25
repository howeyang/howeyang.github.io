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

import CardCozy from "../Cards/CardCozy";
import CardBattleRun from "../Cards/CardBattleRun";
import CardBTB4 from "../Cards/CardBTB4";

class PageWork extends Component {
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
                <div className="bannerMoveBottom">Work </div>{" "}
                <div className="bannerMoveTop">Experience</div>
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
                <Grid item xs={3} sm={3} md={3} className="section">
                  Cool Infographic about Game Hive
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  className="workSubtitle"
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={0}
                    className=""
                  >
                  <Grid item xs={12} sm={12} md={12} className="section workSubtitle">Producer and Developer </Grid>
                  <Grid item xs={12} sm={12} md={12} className=""> {" "} <br></br> </Grid>
                  <Grid item xs={12} sm={12} md={12} className="section workSubtitle">Game Hive - Mobile Game Studio </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3} md={3} className="section">
                  Image of Cozy Cafe? Or just start with the small cards
                </Grid>

                <Grid item xs={3} sm={3} md={3} className="">
                  Section Explaining Roles and Key Achivements
                </Grid>

                <Grid item xs={4} sm={4} md={4} className="">
                  Work at Game Hive. Long Text explaining my work and
                  resposibilities.
                </Grid>

                <Grid item xs={3} sm={3} md={3} className="">
                  Small Cards that Link to Cozy Cafe / Battle Run / BTB4
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <div className="emptySpace"></div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className="workSection">
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch"
                spacing={1}
                className="centerElement"
              >
                <Grid item xs={3} sm={3} md={3} className="section">
                  Image of Battle Run
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  className="section workSubtitle"
                >
                  Senior Integration at Upsight
                </Grid>

                <Grid item xs={3} sm={3} md={3} className="section">
                  Image of Cozy Cafe
                </Grid>

                <Grid item xs={3} sm={3} md={3} className="">
                  Section Explaining Roles and Key Achivements
                </Grid>

                <Grid item xs={4} sm={4} md={4} className="">
                  Work at Upsight. Long Text explaining my work and
                  resposibilities.
                </Grid>

                <Grid item xs={3} sm={3} md={3} className="">
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

export default PageWork;
