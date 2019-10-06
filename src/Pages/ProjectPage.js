import React, { Component } from "react";
import CardB from "../Cards/CardB";
import CardC from "../Cards/CardC";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import CardReact from "../Cards/CardReact";

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
        <Fade bottom>
          <div className="black2 mobilepad">Work that I'm proud to share</div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <CardB />

          <CardC />
          <CardReact />
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
