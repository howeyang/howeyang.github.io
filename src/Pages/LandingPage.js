import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardProjects from "../Cards/CardProjects";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#007ABB";
    document.querySelector(".gradientBackground").classList.add("gradientSoftYellow");
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientBlue");
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div>
            <div className="titleContainer blueText titleText"> HOWE YANG </div>
          </div>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
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
                <div className="padding">
                  <div className="whiteText bigText"> Software Developer </div>
                  <div className="whiteText leftText section"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  </div>

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
                  <div className=""> Middle Container </div>
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
                  <div className=""> right Container </div>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
