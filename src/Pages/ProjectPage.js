import React, { Component } from "react";
import CardB from "../Cards/CardB";
import CardC from "../Cards/CardC";
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
            <label className="blackbutton">Work that I'm proud to share</label>
          </p>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <CardB />
          <CardReact />
          <CardBeach />
          
        </Grid>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <CardC delay={100} />
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
