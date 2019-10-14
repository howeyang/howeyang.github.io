import React, { Component } from "react";
import CardAutobattler from "../Cards/CardAutobattler";
import CardSandbox from "../Cards/CardSandbox";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import CardReact from "../Cards/CardReact";
import CardBeach from "../Cards/CardBeach";

class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade duration={2000}>
          <div className="white1">Projects and Case Studies</div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={12} md={5}>
            <Fade delay={300} bottom>
              <p className="black3">
                <label className="blackbutton">Projects</label>
              </p>
            </Fade>
            <Fade bottom delay={200}>
              <div className="white2 mobilepad">
                What I do in my spare time!
              </div>
            </Fade>
            <CardAutobattler delay={250} />
            <CardReact delay={400} />
          </Grid>
          <Grid item xs={0} sm={0} md={1}>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Fade delay={300} top>
              <p className="black3">
                <label className="blackbutton">Case Studies</label>
              </p>
            </Fade>
            <Fade bottom delay={200}>
              <div className="white2 mobilepad">
                Reverse Engineering and Research!
              </div>
            </Fade>
            <CardBeach delay={400} />
            <CardSandbox delay={550} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
