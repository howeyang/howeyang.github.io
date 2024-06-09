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
import outlink from "../Images/svg/outlink.svg";

class PageCozyCafe extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#ed81a1";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientGreen");
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientGreen");
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div className="emptySpace"></div>
          <div className="titleContainer">
            <div className="landingTextContainer">
              <div className="bannerWhite">
                <div className="bannerMoveBottom">Cozy Cafe ● </div>{" "}
                <div className="bannerMoveTop">Mobile Game</div>
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
                  <Grid item xs={12} sm={12} md={3} className="leftText mediumText">
                    <div class="sectionName">
                      <div class="sectionContentLeft">Design</div>
                      <div class="sectionContentRight">
                        Chris Doan
                        <br></br>
                        Javier Garcia
                      </div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <br></br>
                    <br></br>

                    <div class="sectionName">
                      <div class="sectionContentLeft">Producer</div>
                      <div class="sectionContentRight">Howe Yang</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <br></br>

                    <div class="sectionName">
                      <div class="sectionContentLeft">Art</div>
                      <div class="sectionContentRight">
                        Nancy Andrews
                        <br></br>
                        Gabriel Lavoyer
                      </div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <br></br>
                    <br></br>

                    <div class="sectionName">
                      <div class="sectionContentLeft">Animation</div>
                      <div class="sectionContentRight">Gabriel Lavoyer</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <br></br>

                    <div class="sectionName">
                      <div class="sectionContentLeft">Developers</div>
                      <div class="sectionContentRight">
                        Jason Chiu <br></br>
                        Howe Yang <br></br>
                        Reza Saputra <br></br>
                        Hazem Aziz <br></br>
                      </div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} className="">
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
                        Producer and Developer at Game Hive<br></br> 2019 ->
                        2024{" "}
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
                          Cozy Cafe <img src={outlink} className="icon"></img> <br></br>Google Play Store
                        </div>
                        <span className="emptySpace2">{" "}.{" "} </span>
                       
                        <div className="fancyButton ">
                          Cozy Cafe <img src={outlink} className="icon"></img> <br></br>Apple App Store
                        </div>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      className="leftText mediumText sectionContent"
                    >
                      {" "}
                      <br></br>
                      <labelWork>Responsibilities</labelWork> <br />
                      <span>
                        ● Worked as a Producer and Developer for multiple
                        projects from inception to release on Google and Apple
                        App Stores{" "}
                      </span>{" "}
                      and Post Global Release Support
                      <br></br>
                      <br></br>
                      <span>
                        ● Organized and assisted with Cross team collaborations{" "}
                      </span>{" "}
                      and with external partners for marketing and promotional
                      content
                      <a className="shiftright">
                        <br></br>{" "}
                        <span>
                          {" "}
                          ● Obtained $250,000 Grant from Canada's IMDF Fund
                        </span>
                        <br></br>{" "}
                        <span>
                          ● Collaborated with Mr. Beast for Marketing Promo{" "}
                        </span>
                        <br></br>{" "}
                        <span>
                          {" "}
                          ● Worked with External Art studio to make a Trailer
                        </span>
                      </a>
                      <br></br>
                      <br></br>
                      <span>
                        ● Organized roadmaps and communicated work and
                        expectations of various of team sizes{" "}
                      </span>{" "}
                      - from 4, 8, 15, 30 sized teams with server developers,
                      artists, designers and QA
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={3} className="">
                    Images
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

export default PageCozyCafe;
