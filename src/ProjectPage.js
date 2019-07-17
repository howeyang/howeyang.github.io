import React, { Component } from "react";
import CardB from "./CardB";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            {" "}
            Projects:<a>What I do in my Off Time</a>{" "}
          </div>
        </Fade>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <CardB />
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
