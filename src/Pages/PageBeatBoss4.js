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

import ReactPlayer from "react-player";

class PageBeatBoss4 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#ed81a1";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientGreen");

    document.querySelector(".landingContainer").classList.add("gradientCozy");
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
                <div className="bannerMoveBottom">Beat the Boss 4 ● </div>{" "}
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
                  <Grid item xs={12} sm={12} md={3} className="">
                    <div className="smallPadding centerText">
                      <labelBigText>
                        Team Members <br></br>
                      </labelBigText>
                    </div>

                    <div class="sectionName leftText mediumText">
                      <div class="sectionContentLeft">Design</div>
                      <div class="sectionContentRight">
                       Steven Wang
                        
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
                      Desiree Moffatt
                      
                      </div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <br></br>
                    <br></br>


                    <br></br>

                    <div class="sectionName leftText mediumText">
                      <div class="sectionContentLeft">Developers</div>
                      <div class="sectionContentRight">
                        Ryan Seto <br></br>
                        Howe Yang <br></br>
                        Raphael Ferras <br></br>
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
                          <a
                            className="text-link"
                            href="https://play.google.com/store/apps/details?id=com.gamehivecorp.idlecafe"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Cozy Cafe <img src={outlink} className="icon"></img>{" "}
                            <br></br>Google Play Store
                          </a>
                        </div>
                      </Grid>

                      <Grid item xs={5} sm={5} md={5}>
                        <div className="fancyButton workSubtitle">
                          <a
                            className="text-link"
                            href="https://apps.apple.com/us/app/cozy-cafe-animal-restaurant/id6447704854"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Cozy Cafe <img src={outlink} className="icon"></img>{" "}
                            <br></br>Apple App Store
                          </a>
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
                      <span>● Created multiple UI Elements and Panels </span> with their
                      underlying UI/UX and logic
                      <a className="shiftright">
                      <br></br> <span> ● Main HUD overlay and HUD buttons </span>
                        <br></br> <span> ● Stage Upgrade Upgrade Menu</span>
                        <br></br> <span>● Merchandise Upgrade Menu </span>
                        <br></br> <span> ● Shop Systems and Menus</span>
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>● Created multiple User Experience sequences </span>{" "}
                      to improve player immersion and experience{" "}
                      <a className="shiftright">
                        <br></br> <span> ● Stage Transition to Next Stage</span>
                        <br></br> <span>● Opening Loot Box Sequence </span>
                        <br></br>{" "}
                        <span> ● Initial Loading Screen to Main Game</span>
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>● Helped create in-game Stages
                        </span> and multiple variants by importing / slicing sprites and using Unity's Tile map system
                  
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <labelWork>As a Producer</labelWork> <br />
                      <span>
                        ● Organized and set initial milestones and deadlines {" "}
                      </span>{" "}
                      for Cozy Cafe from it's inception to global release - we released within 3 months!
                      <br></br>
                      <a className="shiftright">
                        
                        <span>
                          {" "}
                          ● Assessed and prioritized what features we needed to work on
                        </span>
                        <br></br>{" "}
                        <span>
                          ● Changed feature priority based on KPIs and designer feedback
                        </span>
                        <br></br>{" "}
                        <span>
                          {" "}
                          ● Released and Submitted Updates on Google and Apple App Stores
                        </span>
                      </a>

                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>
                        ● Organized and created promotional slides {" "}
                      </span>{" "}
                      for Google, Apple and 3rd party representatives
                      
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                     
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
                      <img src={cozycafe_vertical} className="imageFit"></img>
                    </div>

                    <br></br>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                    className=""
                  >
                    <Grid item xs={12} sm={5} md={5} className="">
                      <ReactPlayer
                        url="./Videos/BoxOpen.mp4"
                        width="100%"
                        height="600px"
                        controls={true}
                        playing={false}
                      />
                    </Grid>

                    <Grid item xs={12} sm={5} md={5} className="">
                      <ReactPlayer
                        url="./Videos/EventStage.mp4"
                        width="100%"
                        height="600px"
                        controls={true}
                        playing={false}
                      />
                    </Grid>
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

export default PageBeatBoss4;
