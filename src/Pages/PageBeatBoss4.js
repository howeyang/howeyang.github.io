import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Hidden from "@material-ui/core/Hidden";

import outlink from "../Images/svg/outlink.svg";
import cozycafelogo from "../Images/work/boss4/bosslogo.png";

import boss4work from "../Images/work/boss4/safe4work.jpg";
import bossrevamp from "../Images/work/boss4/bossrevamp.jpg";
import bossweapons from "../Images/work/boss4/newWeapons.jpg";
import bossfinisher from "../Images/work/boss4/revampExperience.jpg";

class PageBeatBoss4 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#af4154";
    document.querySelector(".gradientBackground").classList.add("gradientBlue");
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientBlue");
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div className="emptySpace"></div>
          <div className="titleContainer">
            <div className="landingTextContainer">
              <div className="bannerWhite centerText">
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
                    className="imageFatHeader centerElement"
                  ></img>
                </div>
              </Grid>
              <Grid item sm={3} md={3} className=""></Grid>

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
                      <div class="sectionContentRight">Steven Wang</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div class="sectionName leftText mediumText">
                      <div class="sectionContentLeft">Producer</div>
                      <div class="sectionContentRight">Howe Yang</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div class="sectionName leftText mediumText">
                      <div class="sectionContentLeft">Art</div>
                      <div class="sectionContentRight">Desiree Moffatt</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div class="sectionName leftText mediumText">
                      <div class="sectionContentLeft">Developers</div>
                      <div class="sectionContentRight">
                        Ryan Seto <br></br>
                        Howe Yang <br></br>
                        Raphael Ferras <br></br>
                      </div>
                      <div class="sectionContentMiddle"> > > ></div>
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
                      <b>Beat the Boss 4 is a casual game</b> for a single player experience of beating up your boss / the most unlikeable people with a variety of silly weapons across multiple stages.
                    </Grid>

                    <div className="emptySpaceFloat"></div>

                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      className=""
                    >
                      <Grid item xs={5} sm={5} md={5}>
                        <a
                          className="text-link"
                          href="https://play.google.com/store/apps/details?id=com.gamehivecorp.beattheboss4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="fancyButton  smallText">
                            Boss 4 <img src={outlink} className="icon"></img>{" "}
                            <br></br>
                            Google Store
                          </div>
                        </a>
                      </Grid>

                      <Grid item xs={5} sm={5} md={5}>
                        <a
                          className="text-link"
                          href="https://apps.apple.com/ca/app/beat-the-boss-4-stress-relief/id1034018838"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="fancyButton  smallText">
                            Boss 4 <img src={outlink} className="icon"></img>{" "}
                            <br></br>
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
                        ● Created multiple UI Elements and Panels{" "}
                      </span>{" "}
                      with their underlying UI/UX and logic
                      <a className="shiftright">
                        <br></br>{" "}
                        <span> ● Main HUD overlay and HUD buttons </span>
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
                      <span>● Helped create in-game Stages</span> and multiple
                      variants by importing / slicing sprites and using Unity's
                      Tile map system
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
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
                        <div class="dot"></div>{" "}
                      </div>
                      <span>● Organized and created promotional slides </span>{" "}
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
                        Updated Visuals<br></br>
                      </labelWork>
                    </div>

                    <div className="">
                      <img src={boss4work} className="imageFit"></img>
                    </div>
                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>
                        Spin Off Titles<br></br>
                      </labelWork>
                    </div>

                    <div className="">
                      <img src={bossrevamp} className="imageFit"></img>
                    </div>
                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>
                        Updated Weapons from the Past<br></br>
                      </labelWork>
                    </div>

                    <div className="">
                      <img src={bossweapons} className="imageFit"></img>
                    </div>
                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>
                        Revamp User Experience<br></br>
                      </labelWork>
                    </div>

                    <div className="">
                      <img src={bossfinisher} className="imageFit"></img>
                    </div>
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
