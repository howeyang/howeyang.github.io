import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardProjects from "../Cards/CardProjects";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import avatar from "../Images/gifs/ina.gif";

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#007ABB";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientSoftYellow");
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
            <div className="titleContainer">
              <div className="bannerMoveBottom">
                <div className="bannerWhite glitchAnimation">Hey I'm </div>
              </div>{" "}
              <div className="bannerOutline bannerMoveTop">x</div>
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
              xs={3}
              sm={3}
              md={3}
              className="leftContainer forceHeight"
            >
              <Fade duration={1000} delay={800}>
                <div>
                  <div className="centerElement bigText">Game Developer</div> x

                  <div className="centerElement bigText">VFX Artist</div>
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              className="middleContainer forceHeight"
            >
              <Fade duration={1200} delay={1200}>
                <div>
                  <div className=""> Middle Container </div>
                  <img
                        src={avatar}
                        alt="Unity"
                        className="bigAvatar bigCircle centerElement"
                      />
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={3}
              sm={3}
              md={3}
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
