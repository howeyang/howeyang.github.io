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

            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              className="orangeCard shortCard"
            >
              Waterloo Computer Science

            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              className="orangeCard shortCard"
            >
              Game Hive
              <br></br>
              Developer and Producer - small text - with many minor roles and responsibilites

            </Grid>

            

            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              className="orangeCard landingCard"
            >
              Game Hive

            </Grid>

            <Grid item xs={10} sm={10} md={10} className="">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                className=""
              >
                <Grid item xs={6} sm={6} md={6} className="thirdCard landingCard"></Grid>
                <Grid item xs={6} sm={6} md={6} className="thirdCard landingCard"></Grid>

                <Grid item xs={6} sm={6} md={6} className="firstCard landingCard"></Grid>
                <Grid item xs={6} sm={6} md={6} className="firstCard landingCard"></Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              className="firstCard landingCard"
            ></Grid>

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
