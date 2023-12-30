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
      .classList.remove("gradientSoftYellow");
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div>
            <div className="titleContainer">
              <div className="bannerMoveBottom">
                <div className="bannerWhite glitchAnimation">Hi I'm </div>
              </div>{" "}
              <div className="bannerOutline bannerMoveTop">Howe Yang</div>
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
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <Fade duration={1000} delay={800}>
                    <div className="blueSection">
                      <div className="centerElement whiteText">
                        Generalist Game Developer
                      </div>
                      <div className="centerElement whiteText">
                        I am a Canadian developer with a passion for games!
                      </div>
                    </div>
                  </Fade>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Fade duration={1000} delay={800}>
                    <div className="blueSection">
                      <div className="centerElement whiteText">
                        I enjoy all the aspects of making a game - from
                        pre-production and bouncing of game ideas / design
                        pillars, building vertical slices, iterating on the
                        features and updating with post launch updates.
                        <br></br> <br></br>
                        I've had a wide range of roles making games - I enjoy
                        UI/UX, VFX and just making things sound, look and feel
                        great.
                      </div>
                    </div>
                  </Fade>
                </Grid>
              </Grid>
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
              className="rightContainer forceHeight" //heightBypass
            >
              <Fade duration={1300}>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="stretch"
                  spacing={7}
                  
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <CardExperience delay={1300} />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <CardProjects delay={1400} />
                  </Grid>

          

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
