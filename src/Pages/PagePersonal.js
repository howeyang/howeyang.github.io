import React, { Component } from "react";
import CardAutobattler from "../Cards/CardAutobattler";
import CardSandbox from "../Cards/CardSandbox";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Hidden from "@material-ui/core/Hidden";
import CardReact from "../Cards/CardReact";
import CardBeach from "../Cards/CardBeach";
import CardFire from "../Cards/CardFire";
import CardProjects from "../Cards/CardProjects";

import unitylogo from "../Images/landing/unity_logo.png";
import battlerun from "../Images/work/battlerun/BattleRunMain.png";

class PageCozyCafe extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#66BB6A";
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
                <div className="bannerMoveBottom">Personal </div>{" "}
                <div className="bannerMoveTop">Projects </div>
              </div>
            </div>
          </div>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            className="landingContainer"
          >
          <Grid item xs={12} sm={12} md={12} className="emptySpace">
              <div></div>
            </Grid>
            
            <Grid item xs={10} sm={8} md={3}>
              <CardBeach delay={200} />
            </Grid>

            <Grid item xs={10} sm={8} md={3}>
              <CardProjects delay={300} />
            </Grid>

            
          </Grid>
        </div>
      </div>
    );
  }
}

export default PageCozyCafe;

/*
<Grid
              item
              xs={4}
              sm={4}
              md={4}
              className="leftContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <img
                    className="bigAvatar section centerElement"
                    src={battlerun}
                  />
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              className="middleContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <img
                    className="bigAvatar section centerElement"
                    src={battlerun}
                  />
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              className="rightContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <img
                    className="bigAvatar section centerElement"
                    src={battlerun}
                  />
                </div>
              </Fade>
            </Grid>
*/
