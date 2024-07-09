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

class PageBeatBoss4Mobile extends Component {
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
              <Grid item sm={2} xs={2} className=""></Grid>
              <Grid item sm={8} xs={8} className="workHeaderSection2">
                <div className="imageContainer">
                  <img
                    src={cozycafelogo}
                    className="imageFatHeader centerElement"
                  ></img>
                </div>
              </Grid>
              <Grid item sm={2} xs={2} className=""></Grid>

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
                        <br></br> 2020{" "}
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
                      <b>Beat the Boss 4 is a casual game</b> for a single
                      player experience of beating up your boss / the most
                      unlikeable people with a variety of silly weapons across
                      multiple stages.
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
                          <div className="fancyButton smallText fancyButtonMobile">
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
                          <div className="fancyButton smallText fancyButtonMobile">
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
                      <span>● Updated legacy code </span> - added new features
                      and fixed old bugs
                      <a className="shiftright">
                        <br></br> <span> ● Added new Weapons </span>
                        <br></br>{" "}
                        <span> ● Added new Panels and UI Elements</span>
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>● Launched two spin off titles</span> by refactoring
                      the underlying game{" "}
                      <a className="shiftright">
                        <br></br>{" "}
                        <span>
                          {" "}
                          ● Rehauled Visuals and UI for an updated User
                          Experience
                        </span>
                        <br></br>{" "}
                        <span>
                          ● Added up to date Testing Tools / Internal tools{" "}
                        </span>
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>
                        ● Updated legacy SDKs and plugins to newer versions{" "}
                      </span>{" "}
                      such as Ad SDKs and Analytics SDKs
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <labelWork>As a Producer</labelWork> <br />
                      <span>
                        ● Organized and set initial milestones and deadlines{" "}
                      </span>{" "}
                      for Beat the Boss 4 and it's spin off titles
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
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} className="">
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
                        New Weapons<br></br>
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

                  <Grid item xs={12} sm={12} md={3} className="">
                    <div className="smallPadding centerText">
                      <labelBigText>
                        Team Members <br></br>
                      </labelBigText>
                    </div>

                    <div class="sectionNameMobile leftText mediumText">
                      <div class="sectionContentLeft">Design</div>
                      <div class="sectionContentRight">Steven Wang</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div class="sectionNameMobile leftText mediumText">
                      <div class="sectionContentLeft">Producer</div>
                      <div class="sectionContentRight">Howe Yang</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div class="sectionNameMobile leftText mediumText">
                      <div class="sectionContentLeft">Art</div>
                      <div class="sectionContentRight">Desiree Moffatt</div>
                      <div class="sectionContentMiddle"> > > ></div>
                    </div>

                    <div className="emptySpaceFloat"></div>

                    <div class="sectionNameMobile leftText mediumText">
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

                </Grid>
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>
    );
  }
}

export default PageBeatBoss4Mobile;
