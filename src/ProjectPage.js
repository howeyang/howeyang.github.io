import React, { Component } from "react";
import CardB from "./CardB";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class ProjectPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            {" "}
            Projects<a></a>{" "}
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
