import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import outlink from "../Images/svg/outlink.svg";

import cutehanging from "../Images/work/battlerun/DustSpin.png";
import maciejump from "../Images/work/battlerun/MacieJump.png";

import logo from "../Images/logo/gamehive-battlerun.png";

import thumbleader from "../Images/Thumbnails/ThumbLeader.png";
import thumblanding from "../Images/Thumbnails/ThumbLanding.png";
import thumbspeed from "../Images/Thumbnails/ThumbSpeed.png";
import thumbgacha from "../Images/Thumbnails/ThumbGacha.png";

import { Player } from "video-react";

class PageBattleRunMobile extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div className="emptySpace"></div>
          <div className="titleContainer">
            <div className="landingTextContainer">
              <div className="bannerWhite centerText">
                <div className="bannerMoveBottom">Battle Run ● </div>{" "}
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
              <Grid item sm={2} xs={2} className="">
                <div className="imageContainer">
                  <img
                    src={maciejump}
                    className="imageHeader2 runhangingPosition"
                  ></img>
                </div>
              </Grid>
              <Grid item sm={8} xs={8} className="workHeaderSection2">
                <div className="imageContainer">
                  <img src={logo} className="imageHeader centerElement"></img>
                </div>
              </Grid>
              <Grid item sm={2} xs={2} className="">
                <img
                  src={cutehanging}
                  className="cuteHeader runhangingPositionMobile"
                ></img>
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
                  <Grid item xs={11} sm={11} md={4} className="">
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
                        <br></br> 2020 -> 2023{" "}
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
                      <b>Battle Run is an online PVP Party Racing game</b> for
                      single players or with your friends! Players will race
                      each other on a generated race track with traps and power
                      ups in a frantic rush to the finish!
                    </Grid>

                    <div className="emptySpaceFloat"></div>

                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      className="workSubtitle"
                    >
                      <Grid item xs={5} sm={5} md={5}>
                        <a
                          className="text-link"
                          href="https://play.google.com/store/apps/details?id=com.gamehivecorp.battlerun"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="fancyButton smallText fancyButtonMobile">
                            Battle Run{" "}
                            <img src={outlink} className="icon"></img> <br></br>
                            Google Store
                          </div>
                        </a>
                      </Grid>

                      <Grid item xs={5} sm={5} md={5}>
                        <a
                          className="text-link"
                          href="https://apps.apple.com/us/app/battle-run/id1612277646"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="fancyButton smallText fancyButtonMobile">
                            Battle Run{" "}
                            <img src={outlink} className="icon"></img> <br></br>
                            Apple Store
                          </div>
                        </a>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      className="leftText mediumText textPadding"
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
                        <br></br>{" "}
                        <span> ● Main HUD overlay and HUD buttons </span>
                        <br></br> <span> ● Character Select Screen </span>
                        <br></br> <span>● Internal Test Panel </span>
                        <br></br> <span> ● Leaderboard System </span>
                        <br></br>{" "}
                        <span>
                          {" "}
                          ● Fixes and Additional Features to Existing systems
                        </span>
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div className="dot"></div>{" "}
                      </div>
                      <span>
                        ● Created custom Shaders in HLSL throughout the game{" "}
                      </span>{" "}
                      for efficient visual effects{" "}
                      <a className="shiftright">
                        <br></br> <span> ● Speed Pad Shader </span>
                        <br></br> <span>● Gacha Opening Box Shader </span>
                        <br></br>
                        <span>● Various UI Element Shaders </span> - Glow /
                        Shine / Rotation
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div className="dot"></div>{" "}
                      </div>
                      <span>
                        ● Integrated with a Server Rest API with Client{" "}
                      </span>{" "}
                      to enable Server Cloud Data to drive Unity Client behavior{" "}
                      <a className="shiftright">
                        <br></br> <span> ● Leaderboard System </span>
                        <br></br>{" "}
                        <span>● Player Values stored Server side </span>
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div className="dot"></div>{" "}
                      </div>
                      <labelWork>As a Producer</labelWork> <br />
                      <span>
                        ● Planned and executed a roadmap for launching Battle
                        Run from a small team{" "}
                      </span>{" "}
                      of 4 developers to a 30 person project with server
                      developers, artists, designers and QA
                      <br></br>
                      <a className="shiftright">
                        <span>
                          {" "}
                          ● Assessed and prioritized what features we needed to
                          work on
                        </span>
                        <br></br>{" "}
                        <span>
                          ● Changed feature priority based on KPIs and designer
                          feedback
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

                  <Grid item xs={12} sm={12} md={3} className="">
                    <div className="smallPadding">
                      <labelBigText>
                        Work Examples in Game <br></br>
                      </labelBigText>
                    </div>
                    <div className="">
                      <labelWork>Landing Page HUD</labelWork>
                    </div>

                    <Player
                      poster={thumblanding}
                      src="./landingpage.mp4"
                      preload={"none"}
                      muted={true}
                      loop={true}
                    />

                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>Leaderboard and Test Menu</labelWork>
                    </div>

                    <Player
                      poster={thumbleader}
                      src="./Videos/Leaderboard.mp4"
                      preload={"none"}
                      muted={true}
                      loop={true}
                    />

                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>Speed Pad Shader</labelWork>
                    </div>

                    <Player
                      poster={thumbspeed}
                      src="./speedshader.mp4"
                      preload={"none"}
                      muted={true}
                      loop={true}
                    />

                    <div className="emptySpaceFloat"></div>
                    <div className="">
                      <labelWork>Gacha Opening Shader</labelWork>
                    </div>

                    <Player
                      poster={thumbgacha}
                      src="./Videos/GachaShader.mp4"
                      preload={"none"}
                      muted={true}
                      loop={true}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={3} className="">
                    <div className="smallPadding centerText">
                      <labelBigText>
                        Team Members <br></br>
                      </labelBigText>
                    </div>

                    <div className="sectionNameMobile leftText mediumText">
                      <div className="sectionContentLeft">Design</div>
                      <div className="sectionContentRight">
                        Chris Doan
                        <br></br>
                        Steven Wang
                        <br></br>
                        Javier Garcia
                        <br></br>
                        Fabio Sacchetti
                        <br></br>
                        Alex Gray
                      </div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div className="sectionNameMobile leftText mediumText">
                      <div className="sectionContentLeft">Producer</div>
                      <div className="sectionContentRight">
                        Roy Apoong <br /> Howe Yang
                      </div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div className="sectionNameMobile leftText mediumText">
                      <div className="sectionContentLeft">Art</div>
                      <div className="sectionContentRight">
                        Justin Yu
                        <br></br>
                        Nancy Andrews
                        <br></br>
                        Patricia Takahashi
                        <br></br>
                        Gabriel Lavoyer
                      </div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div className="sectionNameMobile leftText mediumText">
                      <div className="sectionContentLeft">Developers</div>
                      <div className="sectionContentRight">
                        Jason Chiu <br></br>
                        Ryan Seto <br></br>
                        Iman Kazerani <br></br>
                        Aditya Nair <br></br>
                        Howe Yang <br></br>
                        Helen Zhang <br></br>
                        Timothy Chan <br></br>
                        Erin Vaartjes <br></br>
                        Michael Zhao <br></br>
                        Reza Saputra <br></br>
                        Hazem Aziz <br></br>
                      </div>
                      <div className="sectionContentMiddle"> > > ></div>
                    </div>
                    <div className="emptySpaceFloat"></div>
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

export default PageBattleRunMobile;
