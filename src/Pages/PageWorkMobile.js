import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Hidden from "@material-ui/core/Hidden";

import cutehanging from "../Images/work/work/cute-hanging.png";
import upsightlogo from "../Images/work/work/upsight-logo2.png";
import gamehivelogo from "../Images/work/work/gamehive-logo.png";

import upsightinfo from "../Images/work/work/infographic-upsight.png";
import gamehiveinfo from "../Images/work/work/infographic-gamehive.png";

import upsightdashboard1 from "../Images/work/work/dashboard1.png";
import upsightdashboard2 from "../Images/work/work/dashboard2.png";
import upsightdatamine from "../Images/work/work/datamine.png";

import CardCozy from "../Cards/SmallCard/SmallCardCozy";
import CardBattleRun from "../Cards/SmallCard/SmallCardBattleRun";
import CardBTB4 from "../Cards/SmallCard/SmallCardBTB4";

import outlink from "../Images/svg/outlink.svg";

class PageWorkMobile extends Component {
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
              

              <Grid item sm={0} xs={0} className=""></Grid>
              <Grid item sm={6} xs={6} className="workHeaderSection2">
                <div className="imageContainer">
                  <img
                    src={gamehivelogo}
                    className="imageHeader centerElement"
                  ></img>
                </div>
              </Grid>
              <Grid item sm={6} xs={6} className="">
                <div className="imageContainer cuteMobileContainer">
                  <img
                    src={cutehanging}
                    className="cuteHeader2 cutehangingPosition2"
                  ></img>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={12} className="workSectionMobile">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={1}
                  className="centerElement"
                >
                  <Grid item xs={11} sm={11} md={11} className="">
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
                        <labelBigText>
                          Developer and Producer at Game Hive
                        </labelBigText>
                        <br></br> 2019 -> 2024{" "}
                      </Grid>

                      <div className="emptySpaceFloat"></div>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="leftText mediumText section"
                      >
                        <b>Game Hive is a mobile game studio </b> based in
                        Toronto. Game Hive leans towards F2P, casual and
                        stylized games with their biggest titles being Tap
                        Titans, Beat the Boss and Battle Run.
                      </Grid>

                      <div className="emptySpaceFloat"></div>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="workSubtitle"
                      >
                        <a
                          className="text-link"
                          href="https://gamehive.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="fancyButton fancyButtonMobile">
                            Game Hive <img src={outlink} className="icon"></img>
                            <br></br>Mobile Game Studio
                          </div>
                        </a>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} className="">
                        <div className="">
                          <img src={gamehiveinfo} className="centerImage"></img>
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
                        <br></br> <span> ● </span> Created and maintained
                        Internal Testing and Debugging tools in Unity for team's
                        ease of use
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
                        ● Organized roadmaps and coordinated feature deadlines
                        with Team Leads of various team sizes{" "}
                      </span>{" "}
                      - from 4, 8, 15, 30 sized teams with server developers,
                      artists, designers and QA
                    </Grid>
                  </Grid>

                  <Grid item xs={9} sm={9} md={9} className="">
                    <div className="smallPadding">
                      <labelBigText>
                        Games I Worked On <br></br>
                      </labelBigText>
                    </div>
                    <div className="">
                      <labelWork>
                        Click the respective card for info!<br></br>
                      </labelWork>
                    </div>
                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>Idle Resturant Game </labelWork>
                    </div>
                    <CardCozy></CardCozy>
                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>PVP Party Racing Game </labelWork>
                    </div>
                    <CardBattleRun></CardBattleRun>
                    <div className="emptySpaceFloat"></div>
                    <div className="">
                      <labelWork>Casual Game </labelWork>
                    </div>
                    <CardBTB4></CardBTB4>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <div className="emptySpace"></div>
              </Grid>

              <Grid item sm={2} xs={2} className=""></Grid>
              <Grid item sm={8} xs={8} className="workHeaderSection">
                <div className="">
                  <img src={upsightlogo} className="imageHeader"></img>
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
                  <Grid item xs={11} sm={11} md={11} className="">
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
                        <labelBigText>
                          Senior Integration at Upsight
                        </labelBigText>
                        <br></br> 2016 -> 2018{" "}
                      </Grid>

                      <div className="emptySpaceFloat"></div>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="leftText mediumText section"
                      >
                        <b>
                          Upsight was a mobile plugin with analytics, mediated
                          ads and website dashboard service{" "}
                        </b>{" "}
                        for enterprise clients. Upsight would digest data from
                        applications and renders metrics as beautiful dashboards
                        and also provide a queryable Big Data database.
                      </Grid>

                      <div className="emptySpaceFloat"></div>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="workSubtitle"
                      >
                        <div className="workSubtitle centerText">
                          Upsight is no longer active.
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} className="">
                        <div className="">
                          <img src={upsightinfo} className="centerImage"></img>
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
                      <span>
                        ● Served as the technical point of contact and
                        escalation lead for AAA clients such as ...
                      </span>
                      <a className="shiftright">
                        <br></br> <span> ● </span> Worked with Niantic - Pokemon
                        GO
                        <br></br> <span> ● </span> Worked with Twitch - Twitch
                        Mobile
                        <br></br> <span> ● </span> Worked with Scientific Games
                        - Jackpot Party
                        <br></br> <span> ● </span> Other Companies - EA,
                        Activision, Scopely and more!
                      </a>
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>
                        ● Helped clients optimize the use of a Mobile Plugin{" "}
                      </span>{" "}
                      which ranged from writing code, debugging issues and
                      investigating problems
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>● Provided expertise in Big Data analytics </span>{" "}
                      by providing best practices and writing advanced
                      analytical queries to improve performance
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>
                        ● Assisted in maintaining Hadoop and SQL databases{" "}
                      </span>{" "}
                      which lead to shorter disruptions and quicker resolutions
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <span>
                        ● Collaborated with Data Engineering, QA, Mobile Ad, and
                        Customer Success teams{" "}
                      </span>{" "}
                      to investigate, debug and monitor back-end software
                      infrastructure via JIRA issue tracking
                      <br></br>
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <labelWork>Key Contributions</labelWork> <br />
                      <span>● Employee of the month </span> within the first
                      year of employment
                      <br></br>
                      <span>
                        ● Led to contract renewal of a key enterprise client{" "}
                      </span>{" "}
                      due to my contributions in issue resolution and support
                      <br></br>
                      <span>
                        ● Documented our Big Data ingestion pipeline from
                        end-to-end{" "}
                      </span>{" "}
                      which helped identify areas of improvement in the workflow
                      and for onboarding new staff
                    </Grid>
                  </Grid>
                  <Grid item xs={9} sm={9} md={9} className="">
                    <div className="smallPadding">
                      <labelBigText>
                        Upsight Dashboard <br></br>
                      </labelBigText>
                    </div>
                    <div className="">
                      <labelWork>Dashboards - Visualize KPIs</labelWork>
                    </div>

                    <div className="">
                      <img src={upsightdashboard1} className="imageFit"></img>
                    </div>

                    <div className="">
                      <img src={upsightdashboard2} className="imageFit"></img>
                    </div>
                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>Datamine - Query Big Data </labelWork>
                    </div>

                    <div className="">
                      <img src={upsightdatamine} className="imageFit"></img>
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

export default PageWorkMobile;
