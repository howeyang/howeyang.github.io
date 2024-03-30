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

import CardCozy from "../Cards/SmallCard/SmallCardCozy";
import CardBattleRun from "../Cards/SmallCard/SmallCardBattleRun";
import CardBTB4 from "../Cards/SmallCard/SmallCardBTB4";

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
          <div className="emptySpace"></div>
          <Fade delay={500}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={0}
              className="centerElement"
            >
              <Grid item xs={12} sm={12} md={12} className="workSection">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                  spacing={1}
                  className="centerElement"
                >
                  <Grid item xs={12} sm={3} md={3} className="section leftText">
                    Cool Info about Game Hive Game Hive -<br></br>●<br></br>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4} className="">
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="stretch"
                      spacing={0}
                      className=""
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="section workSubtitle"
                      >
                        Producer and Developer at Game Hive<br></br> 2019 -> 2024{" "}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} className="">
                        {" "}
                        <br></br>{" "}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="workSubtitle"
                      >
                        <div className="fancyButton ">
                          Game Hive <br></br>Mobile Game Studio
                        </div>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      className="leftText mediumText"
                    >
                      {" "}
                      <br></br>
                      <br></br> ●{" "}
                      <span>
                        {" "}
                        Worked as a Producer and Developer for multiple projects
                        from inception to release{" "}
                      </span>{" "}
                      and Post Global Release Support
                      <br></br>●{" "}
                      <span>
                        {" "}
                        Organized and assisted with Cross team collaborations{" "}
                      </span>{" "}
                      and with external partners for marketing and promotional
                      content
                      <a className="shiftright">
                        <br></br> ● Obtained $250,000 Grant from Canada's IMDF
                        Fund
                        <br></br> ● Collaborated with Mr. Beast for Marketing
                        Promo
                        <br></br> ● Worked with External Art studio to make a Trailer
                      </a>
                      <br></br>● Worked with a variety of team sizes - from 4,
                        8, 15, 30 sized teams
                      <br></br>
                      <span>
                      ● Planned and executed a roadmap for launching multiple games
                      </span>{" "}
                      from a small team of 4 developers to a 30 person project
                      with server developers, artists, designers and QA
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={3} md={3} className="">
                    <CardCozy></CardCozy>
                    <br></br>
                    <CardBattleRun></CardBattleRun>
                    <br></br>
                    <CardBTB4></CardBTB4>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <div className="emptySpace"></div>
              </Grid>

              <Grid item xs={12} sm={12} md={12} className="workSection">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                  spacing={1}
                  className="centerElement"
                >
                  <Grid item xs={3} sm={3} md={3} className="section">
                    Infographic on Upsight - cool stuff like worked with Pokemon
                  </Grid>

                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    className="section workSubtitle"
                  >
                    Senior Integration at Upsight
                    <br></br> 2016 -> 2018{" "}
                  </Grid>

                  <Grid item xs={3} sm={3} md={3} className="section">
                    Image of Cozy Cafe
                  </Grid>

                  <Grid item xs={3} sm={3} md={3} className="">
                    Section Explaining Roles and Key Achivements
                  </Grid>

                  <Grid item xs={4} sm={4} md={4} className="">
                    Work at Upsight. Long Text explaining my work and
                    resposibilities.
                  </Grid>

                  <Grid item xs={3} sm={3} md={3} className="">
                    Supporting Images
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>
    );
  }
}

export default PageWork;
