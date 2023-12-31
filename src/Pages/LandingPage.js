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
    document.querySelector("body").style.background = "#000";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientBlack");
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientBlack");
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
            <Grid item xs={3} sm={3} md={3} className=" ">
              <div>
                <img
                  src={avatar}
                  alt="Chibi Meeee"
                  className="bigAvatar bigCircle centerElement"
                />
              </div>
            </Grid>

            <Grid item xs={9} sm={9} md={9} className=" ">
              <div>
                <div className="titleContainer">
                  <div className="bannerMoveBottom">
                    <div className="bannerOutline bannerMoveTop">Hi I'm </div>
                  </div>{" "}
                  <div className="bannerOutline bannerMoveTop">Howe Yang</div>
                  <br></br>
                  <Fade duration={1000} delay={800}>
                    <div className="centerElement subtitleText">
                      I've had a wide range of roles making games - I enjoy
                      UI/UX, VFX and just making things sound, look and feel
                      great.
                    </div>
                  </Fade>
                </div>
              </div>
            </Grid>

          

            <Grid item xs={3} sm={3} md={3} className="firstCard landingCard"></Grid>

            <Grid item xs={3} sm={3} md={3} className="thirdCard"></Grid>

            <Grid item xs={3} sm={3} md={3} className="section"></Grid>
            <Grid item xs={3} sm={3} md={3} className="section"></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
