import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardProjects from "../Cards/CardProjects";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import avatar from "../Images/gifs/ina.gif";
import outlink from "../Images/svg/outlink.svg";

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#007abb";
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
                  <div className="verticalCenter">
                    <div className="bannerMoveBottom">
                      <div className="bannerOutline bannerMoveTop">Hi I'm </div>
                    </div>{" "}
                    <div className="bannerOutline bannerMoveTop">Howe Yang</div>
                    <br></br>
                    <Fade duration={1000} delay={800}>
                      <div className="subtitleText">
                        I love playing and making games!
                        <br></br>I enjoy UI/UX, reverse engineering VFX and just
                        making things sound, look and feel great.
                      </div>

                      <div className="fancyButton smallText">
                        Graduate of University of Waterloo <br></br>
                        Bachelor of Computer Science{" "}
                        <img src={outlink} className="icon"></img>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className="emptySpace">
              <div></div>
            </Grid>

            <Grid item xs={3} sm={3} md={3}>
              <CardProjects delay={1300} />
            </Grid>

            <Grid item xs={3} sm={3} md={3}>
              <CardProjects delay={1300} />
            </Grid>

            <Grid item xs={3} sm={3} md={3}>
              <CardProjects delay={1300} />
            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
