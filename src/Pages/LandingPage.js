import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import CardCozy from "../Cards/CardCozy";
import CardBattleRun from "../Cards/CardBattleRun";
import CardBTB4 from "../Cards/CardBTB4";

import CardProjects from "../Cards/CardProjects";
import CardBeach from "../Cards/CardBeach";
import CardGalaxy from "../Cards/CardGalaxy";

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

            <Grid item xs={2} sm={2} md={2} className="">
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

                    <Fade duration={1000} delay={700}>
                      <div className="whiteText">
                        <p className="largerText">
                          I love playing and making games!
                          <br></br>I enjoy UI/UX, reverse engineering VFX and
                          just making things sound, look and feel great.
                        </p>

                        <p></p>
                        <div className="fancyButton smallText">
                          <a
                            className="text-link"
                            href="https://uwaterloo.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="leftfloat">
                              <img
                                src={graduate}
                                alt="Graduate"
                                className="smallfixedimg shiftleft iconColor"
                              />
                            </div>

                            <div className="rightfloat centerElement shiftdown">
                              University of Waterloo <br></br>
                              Bachelor of Computer Science{" "}
                              <img src={outlink} className="icon"></img>
                            </div>
                          </a>
                        </div>
                        <span className="fixedimg"> </span>
                        <div className="fancyButton smallText">
                          <a
                            className="text-link"
                            href="https://gamehive.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="leftfloat">
                              <img
                                src={work}
                                alt="work"
                                className="smallfixedimg shiftleftmore iconColor"
                              />
                            </div>

                            <div className="rightfloat leftText shiftright shiftdown">
                              {" "}
                              Previously at <br></br> Game Hive{" "}
                              <img src={outlink} className="icon"></img>
                            </div>
                          </a>
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
              spacing={2}
              className="centerElement"
            >
              <Grid item xs={6} sm={6} md={3} className="bigText rightText ">
                <Fade duration={1000} delay={800}>
                  {" "}
                  <span className="secondaryText">Published Games</span>{" "}
                </Fade>
              </Grid>
              <Grid item xs={6} sm={6} md={8} className="landingDivider"></Grid>

              <Grid item xs={10} sm={8} md={3}>
                <CardCozy delay={800} />
              </Grid>

              <Grid item xs={10} sm={8} md={3}>
                <CardBattleRun delay={900} />
              </Grid>

              <Grid item xs={10} sm={8} md={3}>
                <CardBTB4 delay={1000} />
              </Grid>

              <Grid item xs={12} sm={12} md={12} className="divider"></Grid>

              <Grid item xs={6} sm={6} md={3} className="bigText rightText">
                {" "}
                <span className="secondaryText fadeInOpacity">
                  Personal Projects
                </span>{" "}
              </Grid>
              <Grid item xs={6} sm={6} md={8} className="landingDivider">
                {" "}
              </Grid>

              <Grid item xs={10} sm={8} md={3}>
                <CardBeach delay={200} />
              </Grid>

              <Grid item xs={10} sm={8} md={3}>
                <CardProjects delay={300} />
              </Grid>

              <Grid item xs={10} sm={8} md={3}>
                <CardGalaxy delay={400} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
