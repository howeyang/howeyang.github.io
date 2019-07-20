import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

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
            <Fade up duration={1000}>
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
                <div className="subtitle">
                  Creators of Tap Titans, Battle Run, Beat the Boss
                </div>
                QA Engineer{" "}
                <a>
                  {" "}
                  <br />
                  July 2019 - Present
                </a>
              </div>

              <p className="section">
                <label>Responsibilities</label> <br />
                Investigating and implementing new testing methods to improve QA
                process efficiency <br /> Actively managing the development
                process through bug reports, build-stability reports, balance
                feedback • Testing new products and updates in development while
                analyzing and logging any issues • Isolating and reproducing
                bugs to assist in the investigation and solution process •
                Reviewing game forums and our existing communities to document
                live game issues • Performing benchmark and competitive analysis
                • Transferring information to the appropriate departments - i.e.
                bugs to quality assurance, new ideas to product development,
                messaging effectiveness to marketing, frequently asked questions
                as noted, and identifying user generated conten
                <br /> <label>Key Contributions</label> <br />
                Aiming to benchmark performance per release. Profile to find
                places for improvement / optimization.
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
                <div className="subtitle">
                  Analytics for Pokemon GO, Activision, Twitch and more
                </div>
                Integration and Solution Engineer <br />
                <a>Sept 2012 - Oct 2018</a>
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
                <span>Helped clients optimize the use of Mobile SDKs</span>{" "}
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
                Employee of the month within the first year of employment
                <br />● Led to contract renewal of key client due to my
                contributions in issue resolution <br></br>● Documented Big Data
                ingestion pipeline from end-to-end, setting the foundation for
                tracking and improving overall workflow and as entry information
                for new staff
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
