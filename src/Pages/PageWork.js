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
            justifyContent="space-between"
            alignItems="center"
            className="landingContainer"
          >
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
          </Grid>
        </div>
      </div>
    );
  }
}

export default PageWork;
