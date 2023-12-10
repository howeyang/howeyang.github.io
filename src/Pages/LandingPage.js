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
                <div className="bannerWhite glitchAnimation">Hello I'm </div>
              </div>{" "}
              <div className="bannerOutline bannerMoveTop">XYYY</div>
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
                  <img
                    src={avatar}
                    alt="Chibi Meeee"
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
              className="rightContainer forceHeight heightBypass"
            >
              <Fade duration={2000}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <CardExperience delay={1400} />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <CardProjects delay={1400} />
                  </Grid>

                  <div className="hvr-sweep-to-right2">
                    <div className="hvr-sweep-to-right">
                      <div className="hvr-sweep-to-right3"></div>
                    </div>
                  </div>
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
