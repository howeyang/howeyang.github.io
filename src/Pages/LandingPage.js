import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardProjects from "../Cards/CardProjects";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import avatar from "../Images/gifs/avatar.gif";
import outlink from "../Images/svg/outlink.svg";
import graduate from "../Images/svg/graduate.svg";
import work from "../Images/svg/briefcase.svg";

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#338BA8";
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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            className=""
          >
            <Grid item xs={12} sm={12} md={12} className="emptySpace">
              <div></div>
            </Grid>

            <Grid item xs={2} sm={2} md={2} className=" ">
              <div>
                <img
                  src={avatar}
                  alt="Chibi Meeee"
                  className="bigAvatar bigCircle centerElement"
                />
              </div>
            </Grid>

            <Grid item xs={6} sm={6} md={6} className=" ">
              <div>
                <div className="titleContainer">
                  <div className="landingTextContainer">
                    <div className="bannerWhite">
                      <div className="bannerMoveBottom">Hi I'm </div>{" "}
                      <div className="bannerMoveTop">Howe Yang</div>
                    </div>

                    <Fade duration={1000} delay={800}>
                      <div className="subtitleText">
                        I love playing and making games!
                        <br></br>I enjoy UI/UX, reverse engineering VFX and just
                        making things sound, look and feel great.
                        <p></p>
                        <div className="fancyButton smallText">
                          <div className="leftfloat">
                            <img
                              src={graduate}
                              alt="Graduate"
                              className="smallfixedimg shiftleft iconColor"
                            />
                          </div>

                          <div className="rightfloat centerElement shiftdown">
                            Graduate of University of Waterloo <br></br>
                            Bachelor of Computer Science{" "}
                            <img src={outlink} className="icon"></img>
                          </div>
                        </div>
                        <span className="fixedimg"> </span>
                        <div className="fancyButton smallText">
                          <div className="leftfloat">
                            <img
                              src={work}
                              alt="work"
                              className="smallfixedimg shiftleftmore iconColor"
                            />
                          </div>

                          <div className="rightfloat leftText shiftright shiftdown">
                          {" "} Previously at <br></br>
                          {" "} Game Hive {" "} <img src={outlink} className="icon"></img>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={1}
              className="centerElement"
            >
              <Grid item xs={3} sm={3} md={3} className="bigText rightText ">
                <Fade duration={1000} delay={1200}>
                  {" "}
                  Published Games{" "}
                </Fade>
              </Grid>
              <Grid item xs={8} sm={8} md={8} className="landingDivider"></Grid>

              <Grid item xs={3} sm={3} md={3}>
                <CardProjects delay={1300} />
              </Grid>

              <Grid item xs={3} sm={3} md={3}>
                <CardProjects delay={1400} />
              </Grid>

              <Grid item xs={3} sm={3} md={3}>
                <CardProjects delay={1500} />
              </Grid>

              <Grid item xs={12} sm={12} md={12} className="divider"></Grid>

              <Grid item xs={3} sm={3} md={3} className="bigText rightText ">
                <Fade duration={1000} delay={1600}>
                  {" "}
                  Personal Projects{" "}
                </Fade>
              </Grid>
              <Grid item xs={8} sm={8} md={8} className="landingDivider">
                {" "}
              </Grid>

              <Grid item xs={3} sm={3} md={3}>
                <CardProjects delay={1300} />
              </Grid>

              <Grid item xs={3} sm={3} md={3}>
                <CardProjects delay={1400} />
              </Grid>

              <Grid item xs={3} sm={3} md={3}>
                <CardProjects delay={1500} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
