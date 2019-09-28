import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import pokemon from "../Images/logo/upsight-pokemon.png";
import activision from "../Images/logo/upsight-activision.png";
import twitch from "../Images/logo/upsight-twitch.png";
import taptitan from "../Images/logo/gamehive-tap.png";
import battlerun from "../Images/logo/gamehive-run.png";
import beatboss from "../Images/logo/gamehive-beat.png";

class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
//<img src={battlerun} alt="Runnn" className="fixedimg" />
  render() {
    return (
      <div>
         <Fade duration={2000} >
          <div className="white1 underline">
            {" "}
            About me{" "}
          </div>
        </Fade>

        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={12} md={12}>
            <Fade  duration={1000}>
              <div className="black3">
                {" "}
                <a>Graduated from </a>{" "}
                <a
                  className="custom_button job"
                  href="https://uwaterloo.ca/"
                  target="_blank"
                >
                  University of Waterloo
                </a>
                <br></br>
                Bachelor of Computer Science Honours <a>2012 - 2016</a>
              </div>
              <div className="black3 removemargin">
                <img src="placeholder.svg" className="bounce"></img>Toronto, Canada
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Fade duration={2000}>
              <div className="section2">
              <div className="black2"> 
                {" "}
                Currently at{" "}
                <a
                  className="custom_button job"
                  href="https://www.gamehive.com/"
                  target="_blank"
                >
                  Game Hive
                </a>
                <Flip cascade left duration={700} delay={500}>
                <div className="subtitle">
                  Creators of
                  
                  <img src={taptitan} alt="Tap Tap Tap" className="fixedimg" />
                  <img src={beatboss} alt="1 2 3 and 4" className="fixedimg" />
                  
                  
                </div>
                </Flip>
                QA Developer{" "}
                <a>
                  {" "}
                  <br />
                  July 2019 - Present
                </a>
                </div>

              <p className="section">
                <label>Responsibilities</label> <br />
                <span>Actively assisting the development process </span> through
                JIRA management, acceptance criteria, priority reports and communication
                <br />
                <b>● </b>
                <span>
                  Investigating and documenting issues
                </span>{" "}
                via JIRA with helpful summaries, reproduction steps and references (video/screenshots)
                <br />
                <b>● </b>
                <span>
                  Fixing and addressing features and bugs in Unity
                </span>{" "}
                via Pull Requests and code review.
                <b>● </b>
                <span>Testing new features
                and updates in development </span> via analyzing edge cases and by isolating problematic behaviour
                <br />
                <b>● </b>
                <span>Monitor game forums and
                existing communities</span> to identify live game issues
                <br />
                <b>● </b>
                <span>Building and deploying Applications </span> to the Google Play Store and to the Apple App Store (Production and Development builds)
                <br /> 
                <label>Key Contributions</label> <br />
                <span>Identified optimizations and quality of life fixes </span> that resulted in a decrease in crashes and better user experience
                <br />
                <b>● </b>
                <span>
                  Tracked build reports and asset size growth over time
                </span> to help identify unnecessary files and new feature cost
              </p>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Fade duration={2000}>
            <div className="section2">
              <div className="black2">
                
                Previously at {" "}
                <a
                  className="custom_button job"
                  href="https://www.upsight.com/"
                  target="_blank"
                >
                  Upsight
                </a>
                <Flip cascade right duration={700} delay={500}>
                <div className="subtitle">
                  Worked with
                  <img src={pokemon} alt="Niantic" className="fixedimg" />
                  <img src={activision} alt="Activision" className="fixedimg" />
                  <img src={twitch} alt="Twitch" className="fixedimg" />
                  <a> </a>
                  and more!
                </div>
                </Flip>
                Integration and Solution Engineer <br />
                <a>Sept 2016 - Oct 2018</a>
              </div>

              <p className="section">
                <label>Responsibilities</label> <br />
                <span>
                  Served as the technical point of contact and escalation lead
                  for AAA clients
                </span>{" "}
                such as <b className="b1">Niantic, Ubisoft, Activision, EA, Nickelodeon,
                Scientific Games, Twitch</b>
                <br />
                <b>● </b>
                <span>Helped clients optimize the use of a Mobile Plugin</span>{" "}
                which ranged from writing code, debugging issues and
                investigating problems
                <br />
                <b>● </b>
                <span>Provided expertise in Big Data analytics </span> by
                providing best practices and writing advanced analytical queries
                to improve performance <br />
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
                  Led to contract renewal of key enterprise client
                </span>{" "}
                due to my contributions in issue resolution
                <br /> <b>●</b>
                <span>
                  Documented Big Data ingestion pipeline from end-to-end{" "}
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

export default AboutPage;
