import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import pokemon from "./logo/upsight-pokemon.png";
import activision from "./logo/upsight-activision.png";
import twitch from "./logo/upsight-twitch.png";
import taptitan from "./logo/gamehive-tap.png";
import battlerun from "./logo/gamehive-run.png";
import beatboss from "./logo/gamehive-beat.png";

class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            {" "}
            About me<a> </a>{" "}
          </div>
        </Fade>

        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={12} md={12}>
            <Fade down duration={1000}>
              <div className="black3">
                {" "}
                <a>Graduated from </a>{" "}
                <a
                  className="custom_button job"
                  href="https://uwaterloo.ca/"
                  target="_blank"
                >
                  University of Waterloo
                </a>{" "}
                Bachelor of Computer Science Honours <a>2012 - 2016</a>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Fade duration={2000}>
              <div className="black3">
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
                  <img src={battlerun} alt="Runnn" className="fixedimg" />
                  
                </div>
                </Flip>
                QA Engineer{" "}
                <a>
                  {" "}
                  <br />
                  July 2019 - Present
                </a>
              </div>

              <p className="section">
                <label>Responsibilities</label> <br />
                <span>Actively managing the development process </span> through
                bug reports, build-stability reports, balance feedback
                <br />
                <b>● </b>
                <span>
                  Investigating and implementing new testing and prioritization methods{" "}
                </span>{" "}
                to improve QA process efficiency and development
                <b>● </b>
                <span>Testing new features
                and updates in development </span> while analyzing and logging
                issues via isolating and reproducing problematic behaviour
                <br />
                <b>● </b>
                <span>Reviewing game forums and
                existing communities</span> to document live game issues
                <br />
                <b>● </b>
                <span>Transferring
                information to the appropriate teams</span> i.e. bugs to
                quality assurance, new ideas to product development, messaging
                effectiveness to marketing
                <br /> <label>Goals for Contribution</label> <br />
                <span>Aiming to benchmark performance per release </span> to
                give point of reference for release comparison and new feature
                cost.
                <br />
                <b>● </b>
                <span>
                  Profile to find features and scripts that require improvement / optimization
                </span>
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Fade duration={2000}>
              <div className="black3">
                {" "}
                Worked at{" "}
                <a
                  className="custom_button job"
                  href="https://www.upsight.com/"
                  target="_blank"
                >
                  Upsight
                </a>
                <Flip cascade right duration={700} delay={500}>
                <div className="subtitle">
                  Analytics for
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
                such as Niantic, Ubisoft, Activision, EA, Nickelodeon,
                Scientific Games, Twitch
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
                infrastructure
                <br /> <label>Key Contributions</label> <br />
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
            </Fade>
          </Grid>

          {/* End of Grid Container*/}
        </Grid>
      </div>
    );
  }
}

export default AboutPage;
