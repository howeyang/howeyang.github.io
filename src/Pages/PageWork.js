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
import upsightlogo from "../Images/work/work/upsight-logo2.png";
import gamehivelogo from "../Images/work/work/gamehive-logo.png";

import CardCozy from "../Cards/SmallCard/SmallCardCozy";
import CardBattleRun from "../Cards/SmallCard/SmallCardBattleRun";
import CardBTB4 from "../Cards/SmallCard/SmallCardBTB4";

import outlink from "../Images/svg/outlink.svg";

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
         
          <Fade delay={500}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={0}
              className="centerElement"
            >
              <Hidden smDown>
                <Grid item sm={3} md={3} className=""></Grid>
                <Grid item sm={4} md={4} className="workSection">
                  <div className="imageContainer">
                    <img
                      src={gamehivelogo}
                      className="imageFit centerElement"
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
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      md={3}
                      className="section leftText"
                    >
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
                          className="workSubtitle"
                        >
                          <labelBigText>
                            Developer and Producer at Game Hive
                          </labelBigText>
                          <br></br> 2019 -> 2024{" "}
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
                            Game Hive <img src={outlink} className="icon"></img>
                            <br></br>Mobile Game Studio
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
                          ● Worked as a Producer and Developer for multiple
                          projects from inception to release on Google and Apple
                          App Stores{" "}
                        </span>{" "}
                        and Post Global Release Support
                        <a className="shiftright">
                          <br></br> <span> ● </span> Producer and Developer on
                          Cozy Cafe
                          <br></br> <span> ● </span> Producer and Developer on
                          Battle Run
                          <br></br> <span> ● </span> Producer and Developer on
                          Beat the Boss 4
                        </a>
                        <br></br>
                        <div className="textdivider">
                          {" "}
                          <div class="dot"></div>{" "}
                        </div>
                        <span>
                          ● Developed C# Scripts and HLSL Shaders in Unity for
                          mobile games{" "}
                        </span>{" "}
                        for UI / UX and blah blah
                        <a className="shiftright">
                          <br></br> <span> ● </span> Producer and Developer on
                          Cozy Cafe
                          <br></br> <span> ● </span> Producer and Developer on
                          Battle Run
                          <br></br> <span> ● </span> Producer and Developer on
                          Beat the Boss 4
                        </a>
                        <br></br>
                        <div className="textdivider">
                          {" "}
                          <div class="dot"></div>{" "}
                        </div>
                        <labelWork>As a Producer</labelWork> <br />
                        <span>
                          ● Organized and assisted with Cross team
                          collaborations{" "}
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

                <Grid item sm={3} md={3} className=""></Grid>
                <Grid item sm={4} md={4} className="workSection">
                  <div className="imageContainer">
                    <img
                      src={upsightlogo}
                      className="imageFit centerElement"
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
                    <Grid item xs={3} sm={3} md={3} className="section">
                      Infographic on Upsight - cool stuff like worked with
                      Pokemon
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} className=" workSubtitle">
                      <labelBigText>
                        {" "}
                        Senior Integration at Upsight
                      </labelBigText>
                      <br></br> 2016 -> 2018{" "}
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} className="section">
                      Image of Cozy Cafe
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} className="">
                      Section Explaining Roles and Key Achivements
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      sm={4}
                      md={4}
                      className="leftText mediumText"
                    >
                      {" "}
                      <br></br>
                      <div className="workSubtitle centerText">
                        Upsight is no longer active.
                      </div>
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
                        ● Assisted in maintaining Hadoop and SQL databases ●{" "}
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
                      <br></br>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} className="">
                      Supporting Images
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Fade>
        </div>
      </div>
    );
  }
}

export default PageWork;
