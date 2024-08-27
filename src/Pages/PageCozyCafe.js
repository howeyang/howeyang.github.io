import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Hidden from "@material-ui/core/Hidden";
import outlink from "../Images/svg/outlink.svg";

import cutehanging from "../Images/work/work/cute-hanging.png";
import cozycafelogo from "../Images/work/cozycafe/cozycafe_logo.png";
import cozycafe_vertical from "../Images/work/cozycafe/cozycafe_vertical.png";

import { Player } from "video-react";
import thumbcozy1 from "../Images/Thumbnails/ThumbCozy1.png";
import thumbcozy2 from "../Images/Thumbnails/ThumbCozy2.png";

import CozyMobile from "../Pages/PageCozyMobile";

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
        <Hidden smDown>
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
                      className="cuteHeader cutehangingPosition"
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

                      
                    <div className="sectionName leftText mediumText">
                      <div className="sectionContentLeft">Design</div>
                      <div className="sectionContentRight">
                        Chris Doan
                        <br></br>
                        Javier Garcia
                      </div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div className="sectionName leftText mediumText">
                      <div className="sectionContentLeft">Producer</div>
                      <div className="sectionContentRight">Howe Yang</div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div className="sectionName leftText mediumText">
                      <div className="sectionContentLeft">Art</div>
                      <div className="sectionContentRight">
                        Nancy Andrews
                        <br></br>
                        Gabriel Lavoyer
                      </div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div className="sectionName leftText mediumText">
                      <div className="sectionContentLeft">Animation</div>
                      <div className="sectionContentRight">Gabriel Lavoyer</div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div className="sectionName leftText mediumText">
                      <div className="sectionContentLeft">Developers</div>
                      <div className="sectionContentRight">
                        Jason Chiu <br></br>
                        Howe Yang <br></br>
                        Reza Saputra <br></br>
                        Hazem Aziz <br></br>
                      </div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>
                    <div className="emptySpaceFloat"></div>
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
                      </Grid>

                      <div className="emptySpaceFloat"></div>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="leftText mediumText section"
                      >
                        <b>Cozy Cafe is a comfy idle incremental game</b> for
                        single players, where you will visit a variety of
                        different restaurants and watch your growing roster of
                        cute animal Waiters and Chefs serve delicious foods!
                      </Grid>

                      <div className="emptySpaceFloat"></div>

                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={0}
                        className="workSubtitle"
                      >
                        <Grid item xs={5} sm={6} md={6}>
                          <a
                            className="text-link"
                            href="https://gamehive.com/games/cozy-cafe"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="fancyButton  smallText">
                              More Details about Cozy Cafe{" "}
                              <img src={outlink} className="icon"></img>{" "}
                              <br></br>
                            </div>
                          </a>
                        </Grid>

                        {" "}

                       
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="leftText mediumText "
                      >
                        {" "}
                        <br></br>
                        <labelBigText className="underline">
                          Responsibilities
                        </labelBigText>{" "}
                        <br />
                        <labelWork>As a Developer</labelWork> <br />
                        <span>
                          ● Created multiple UI Elements and Panels{" "}
                        </span>{" "}
                        with their underlying UI/UX and logic
                        <a className="shiftright">
                          <br></br> <span> ● Created main Landing Page </span>
                          <br></br> <span> ● Created Character Select</span>
                          <br></br>{" "}
                          <span> ● Created Tournament Position System </span>
                          <br></br>{" "}
                          <span>
                            ● Expanded on Battle Pass / Milestone System{" "}
                          </span>
                        </a>
                        <br></br>
                        <div className="textdivider">
                          {" "}
                          <div className="dot"></div>{" "}
                        </div>
                        <span>
                          ● Parsed Server Data into Client side UI Elements{" "}
                        </span>{" "}
                        to improve player immersion and experience{" "}
                        <a className="shiftright">
                          <br></br>{" "}
                          <span> ● Stage Transition to Next Stage</span>
                          <br></br> <span>● Opening Loot Box Sequence </span>
                          <br></br>{" "}
                          <span> ● Initial Loading Screen to Main Game</span>
                        </a>
                        <br></br>
                        <div className="textdivider">
                          {" "}
                          <div className="dot"></div>{" "}
                        </div>
                        <span>
                          ● Handwrote Shaders to be used in menus and in core
                          gameplay{" "}
                        </span>{" "}
                        to improve player immersion and experience{" "}
                        <a className="shiftright">
                          <br></br> <span> ● Speed Pad Shader </span>
                          <br></br>{" "}
                          <span>● Gacha Opening Sequence Shader </span>
                          <br></br>{" "}
                          <span> ● Initial Loading Screen to Main Game</span>
                        </a>
                        <br></br>
                        <div className="textdivider">
                          {" "}
                          <div className="dot"></div>{" "}
                        </div>
                        <span>
                          ● Developed and maintained Internal Testing tools
                        </span>{" "}
                        to ease developer and designer for testing new features
                        or balance
                        <br></br>
                        <div className="textdivider">
                          {" "}
                          <div className="dot"></div>{" "}
                        </div>
                        <labelWork>As a Producer</labelWork> <br />
                        <span>
                          ● Organized and set initial milestones and deadlines{" "}
                        </span>{" "}
                        for Cozy Cafe from it's inception to global release - we
                        released within 3 months!
                        <br></br>
                        <a className="shiftright">
                          <span>
                            {" "}
                            ● Assessed and prioritized what features we needed
                            to work on
                          </span>
                          <br></br>{" "}
                          <span>
                            ● Changed feature priority based on KPIs and
                            designer feedback
                          </span>
                          <br></br>{" "}
                          <span>
                            {" "}
                            ● Released and Submitted Updates on Google and Apple
                            App Stores
                          </span>
                        </a>
                        <div className="textdivider">
                          {" "}
                          <div className="dot"></div>{" "}
                        </div>
                        <span>● Organized and created promotional slides </span>{" "}
                        for Google, Apple and 3rd party representatives
                        <br></br>
                        <div className="textdivider">
                          {" "}
                          <div className="dot"></div>{" "}
                        </div>
                      </Grid>
                    </Grid>

                    <Grid item xs={11} sm={3} md={3} className="">
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
                      alignItems="center"
                      spacing={2}
                      className="centerElement"
                    >
                      <Grid item xs={11} sm={11} md={5} className="">
                      <labelWork>
                          Shop and Opening Sequence<br></br>
                        </labelWork>
                        <Player
                          poster={thumbcozy1}
                          fluid={false}
                          width={"100%"}
                          height={600}
                          src="./Videos/BoxOpen.mp4"
                          preload={"none"}
                          muted={true}
                          loop={true}
                        />
                      </Grid>

                      <Grid item xs={11} sm={11} md={5} className="">
                      <labelWork>
                          Event Stage Gameplay<br></br>
                        </labelWork>
                        <Player
                          poster={thumbcozy2}
                          fluid={false}
                          width={"100%"}
                          height={600}
                          src="./Videos/EventStage.mp4"
                          preload={"none"}
                          muted={true}
                          loop={true}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Fade>
          </div>
        </Hidden>

        <Hidden mdUp>
          <CozyMobile></CozyMobile>
        </Hidden>
      </div>
    );
  }
}

export default PageCozyCafe;
