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
          <div className="white1">Projects</div>
        </Fade>
        <Fade delay={200} bottom>
          <p className="black3">
            <label className="blackbutton">What I do in my off time!</label>
          </p>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <CardAutobattler delay={100}  />
          <CardReact delay={250} />
          <CardBeach delay={400}  />
          
        </Grid>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <CardSandbox delay={250} />
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
