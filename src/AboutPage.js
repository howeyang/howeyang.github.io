import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class AboutPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
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
                <a className="custom_button" href='https://uwaterloo.ca/'>University of Waterloo</a> Bachelor
                of Computer Science Honours <a>2012 - 2016</a>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Fade duration={2000}>
              <div className="black3">
                {" "}
                Currently at <a className="custom_button" href='https://www.gamehive.com/'>Game Hive</a>
                <br />
                QA Engineer{" "}
                <a>
                  {" "}
                  <br />July 2019 - Present
                </a>
              </div>

              <p className="section">
                <label>Responsibilities</label> <br />
                Helped people out :)
                <br /> <label>Key Contributions</label> <br />
                Tap titans 22222
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Fade duration={2000}>
              <div className="black3">
                {" "}
                Worked at <a className="custom_button" href='https://www.upsight.com/'>Upsight</a>
                <br />
                Integration and Solution Engineer <br />
                <a>Sept 2012 - Oct 2018</a>
              </div>

              <p className="section">
                <label>Responsibilities</label> <br />
                Helped people out :)
                <br /> <label>Key Contributions</label> <br />
                Pokemon Goooo
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
