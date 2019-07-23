import React, { Component } from "react";
import CardB from "./CardB";
import CardC from "./CardC";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import CardReact from "./CardReact";

class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            Projects
          </div>
        </Fade>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <CardB />

          <CardC />
          <CardReact />
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
