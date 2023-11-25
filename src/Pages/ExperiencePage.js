import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import pokemon from "../Images/logo/upsight-pokemon.png";
import activision from "../Images/logo/upsight-activision.png";
import twitch from "../Images/logo/upsight-twitch.png";
import battlebouncer from "../Images/logo/gamehive-balls.png";
import battlerun from "../Images/logo/gamehive-battlerun.png";
import beatboss from "../Images/logo/gamehive-beat.png";
import ReactPlayer from "react-player";

class ExperiencePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#ffede6";
    document.querySelector('.gradientBackground').classList.add('gradientGreen'); 
  }

  componentWillUnmount(){
    document.querySelector('.gradientBackground').classList.remove('gradientGreen');
  }

  //<img src={battlerun} alt="Runnn" className="fixedimg" />
  render() {
    return (
      <div>
        <Fade duration={2000}>
          <div className="white1"> Experience </div>
        </Fade>
        <Fade delay={300}>
          <p className="black3">
            <label className="blackbutton">
              Graduated from{" "}
              <a
                className="custom_button job"
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Waterloo
              </a>
              <br></br>
              Bachelor of Computer Science Honours <a>2012 - 2016</a>
              <br></br>
              <img src="placeholder.svg" className="bounce"></img>Toronto,
              Canada
            </label>
          </p>
        </Fade>

        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={12} md={12}>
            <Fade duration={2000}>
              <div className="section2">
                <div className="white2">
                  <p>
                    Currently at{" "}
                    <a
                      className="custom_button job"
                      href="https://www.gamehive.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Game Hive
                    </a>{" "}
                    <label className="blackbutton">Developer & Producer</label>{" "}
                    July 2019 - Present
                  </p>
                  <Flip cascade left duration={700} delay={700}>
                    <div className="subtitle">
                      Worked on {" "}
                      <img
                        src={battlerun}
                        alt="Casual PVP Racing"
                        className="fixedimg"
                      />
                      <img
                        src={battlebouncer}
                        alt="RPG Brick Breaker"
                        className="fixedimg"
                      />
                      <img
                        src={beatboss}
                        alt="Casual Beatem Up!"
                        className="fixedimg"
                      />
                    </div>
                  </Flip>
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <p className="section">
                <label>Battle Run Contributions</label> <br />
                <span>
                  Planned and executed a roadmap for launching Battle Run
                </span>{" "}
                from a small team of 4 developers to a 30 person project with
                server developers, artists, designers and QA
                <b>● </b>
                <span>Developed features in Unity </span>
                that parsed data from Server Responses and transformed into working client logic with interactions in Unity. {" "}
                <span>
                  In the examples section, you can see an example of the Landing Page which I made in Unity.
                </span>
                <b>● </b>
                <span>
                  Worked on custom shaders in Unity {" "}
                </span>
                that enabled artists to customize and stylize elements. Majority
                of shaders in Battle Run were written by myself.
                <span> In the examples section, you can see an example of the Speed Pad Shaders which I wrote in HLSL.</span>
                <b>● </b>
                <span>Pioneered the use of different Unity tech </span>
                such as device simulator for testing, anchors in UI for dynamic
                layouts
                <b>● </b>
                <span>Worked on improving Internal tools in Unity </span>
                to improve ease of testing and quality of life of QA and
                developers
                <br />
                <label>Responsibilities</label> <br />
                <span>Developing and fixing features in Unity</span> via Pull
                Requests, reviewing teammates code and testing edge cases
                <b>● </b>
                <span>Actively assisting development scheduling </span> through
                JIRA management, identifying acceptance criteria, triaging and
                communicating concerns
                <br />
                <b>● </b>
                <span>Investigating and documenting issues</span> via JIRA with
                contextual summaries, reproduction steps and references
                (video/screenshots)
                <br />
                <b>● </b>
                <span>Monitor game forums and existing communities</span> to
                identify live game issues and engage the player base
                <br />
                <b>● </b>
                <span>Building and deploying Applications </span> to the Google
                Play Store and to the Apple App Store (Production and
                Development builds)
                <br />
                <label>Key Contributions</label> <br />
                <span>
                  Identified optimizations and quality of life fixes{" "}
                </span>{" "}
                that resulted in a decrease in crashes and better user
                experience
                <br />
                <b>● </b>
                <span>
                  Developed and maintained Internal Debugging scripts
                </span>{" "}
                to improve our team's ability to isolate game states and
                features
                <br />
                <b>● </b>
                <span>
                  Maintaining Roadmaps and fleshing out future versions
                </span>{" "}
                to get design / art ahead so that developers are on track.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={400}>
              <p className="black3">
                <label className="blackbutton">Example Work</label>
              </p>
              <div className="section">
                <ReactPlayer
                  url="./landingpage.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                  loop={true}
                />
              </div>
            </Fade>
            <div className="section">
              <ReactPlayer
                url="./speedshader.mp4"
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                loop={true}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Fade duration={2000}>
              <div className="section2">
                <div className="white2">
                  <p>
                    Previously at{" "}
                    <a
                      className="custom_button job"
                      href="https://www.upsight.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Upsight
                    </a>{" "}
                    <label className="blackbutton">
                      Integration and Support
                    </label>{" "}
                    Sept 2016 - Oct 2018
                  </p>
                  <Flip cascade right duration={700} delay={800}>
                    <div className="subtitle">
                      Worked with
                      <img src={pokemon} alt="Niantic" className="fixedimg" />
                      <img
                        src={activision}
                        alt="Activision"
                        className="fixedimg"
                      />
                      <img src={twitch} alt="Twitch" className="fixedimg" />
                      <a> </a>
                      and more!
                    </div>
                  </Flip>
                </div>

                <p className="section">
                  <label>Responsibilities</label> <br />
                  <span>
                    Served as the technical point of contact and escalation lead
                    for AAA clients
                  </span>{" "}
                  such as{" "}
                  <b className="b1">
                    Niantic, Ubisoft, Activision, EA, Nickelodeon, Scientific
                    Games, Twitch
                  </b>
                  <br />
                  <b>● </b>
                  <span>
                    Helped clients optimize the use of a Mobile Plugin
                  </span>{" "}
                  which ranged from writing code, debugging issues and
                  investigating problems
                  <br />
                  <b>● </b>
                  <span>Provided expertise in Big Data analytics </span> by
                  providing best practices and writing advanced analytical
                  queries to improve performance <br />
                  <b>● </b>
                  <span>Assisted in maintaining Hadoop and SQL databases </span>
                  which lead to shorter disruptions and quicker resolutions
                  <br />
                  <b>● </b>
                  <span>
                    Collaborated with Data Engineering, QA, Mobile Ad, and
                    Customer Success teams{" "}
                  </span>
                  to investigate, debug and monitor back-end software
                  infrastructure via JIRA issue tracking
                  <br />
                  <label>Key Contributions</label> <br />
                  <span>Employee of the month </span> within the first year of
                  employment
                  <br /> <b>●</b>
                  <span>
                    Led to contract renewal of a key enterprise client
                  </span>{" "}
                  due to my contributions in issue resolution and support
                  <br /> <b>●</b>
                  <span>
                    Documented our Big Data ingestion pipeline from end-to-end{" "}
                  </span>{" "}
                  which set the foundation for tracking and improving overall
                  workflow and entry information for new staff
                </p>
              </div>
            </Fade>
          </Grid>

          {/* End of Grid Container*/}
        </Grid>
      </div>
    );
  }
}

export default ExperiencePage;
