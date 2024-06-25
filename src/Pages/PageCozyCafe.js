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

import cutehanging from "../Images/work/work/cute-hanging.png";
import cozycafelogo from "../Images/work/cozycafe/cozycafe_logo.png";
import cozycafe_vertical from "../Images/work/cozycafe/cozycafe_vertical.png";

class PageCozyCafe extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#ed81a1";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientGreen");

      document
      .querySelector(".landingContainer")
      .classList.add("gradientCozy");

    
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientGreen");

      document
      .querySelector(".landingContainer")
      .classList.remove("gradientCozy");
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
              <Grid item sm={3} md={3} className=""></Grid>
              <Grid item sm={4} md={4} className="workHeaderSection2">
                <div className="imageContainer">
                  <img
                    src={cozycafelogo}
                    className="imageHeader centerElement"
                  ></img>
                </div>
              </Grid>
              <Grid item sm={3} md={3} className="">
                <div className="imageContainer">
                  <img
                    src={cutehanging}
                    className="imageHeader cutehangingPosition"
                  ></img>
                </div>
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
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    className=""
                  >
                    <div className="smallPadding centerText">
                      <labelBigText>
                        Team Members <br></br>
                      </labelBigText>
                    </div>

                    <div class="sectionName leftText mediumText">
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

                    <div class="sectionName leftText mediumText">
                      <div class="sectionContentLeft">Producer</div>
                      <div class="sectionContentRight">Howe Yang</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <br></br>

                    <div class="sectionName leftText mediumText">
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

                    <div class="sectionName leftText mediumText">
                      <div class="sectionContentLeft">Animation</div>
                      <div class="sectionContentRight">Gabriel Lavoyer</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <br></br>

                    <div class="sectionName leftText mediumText">
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
                        className="workSubtitle"
                      >
                        <labelBigText>Developer and Producer</labelBigText>
                        <br></br> 2023 -> 2024{" "}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} className="">
                        {" "}
                        <br></br>{" "}
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      className=""
                    >
                      <Grid item xs={5} sm={5} md={5}>
                        <div className="fancyButton workSubtitle">
                          Cozy Cafe <img src={outlink} className="icon"></img>{" "}
                          <br></br>Google Play Store
                        </div>
                      </Grid>

                      <Grid item xs={5} sm={5} md={5}>
                        <div className="fancyButton workSubtitle">
                          Cozy Cafe <img src={outlink} className="icon"></img>{" "}
                          <br></br>Apple App Store
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
                      <labelBigText className="underline">
                        Responsibilities
                      </labelBigText>{" "}
                      <br />
                      <labelWork>As a Developer</labelWork> <br />
                      <span>
                        ● Developed C# Scripts and HLSL Shaders in Unity 3D for
                        mobile games{" "}
                      </span>{" "}
                      <a className="shiftright">
                        <br></br> <span> ● </span> Prototyped, Soft Launched and
                        Global Launched multiple games on Google Play Store and
                        Apple App Store
                        <br></br> <span> ● </span> Worked on Menus and Panels -
                        UI, their visual interactions and logic to player input
                        <br></br> <span> ● </span> Worked on Shaders in HLSL to
                        give games high performance and fidelity
                        <br></br> <span> ● </span> Troubleshooted crashes and
                        issues via ADB / Xcode logs / Unity crash logs to
                        resolve bugs
                        <br></br> <span> ● </span> Peer Reviewed coworkers' Pull
                        Requests for issues. Submitted my own Pull Requests with
                        detailed information.
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <labelWork>As a Producer</labelWork> <br />
                      <span>
                        ● Producer for multiple projects from inception to
                        release on Google and Apple App Stores{" "}
                      </span>{" "}
                      and Post Global Release Support
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
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
                          ● Worked with an External Art studio to make a Trailer
                        </span>
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>
                        ● Organized roadmaps and communicated work and
                        expectations of various of team sizes{" "}
                      </span>{" "}
                      - from 4, 8, 15, 30 sized teams with server developers,
                      artists, designers and QA
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={3} md={3} className="">
                    <div className="smallPadding">
                      <labelBigText>
                        Screenshots! <br></br>
                      </labelBigText>
                    </div>
                    <div className="">
                      <labelWork>
                        Comfy Cute Idle Incremental<br></br>
                      </labelWork>
                    </div>

                    <div className="imageContainer">
                      <img
                        src={cozycafe_vertical}
                        className="imageFit"
                      ></img>
                    </div>

                    <br></br>
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
