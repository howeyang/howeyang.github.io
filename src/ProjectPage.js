import React, { Component } from "react";
import CardA from "./CardA";
import Grid from "@material-ui/core/Grid";

class ProjectPage extends Component {
  render() {
    return (
      <div>
                <div className="white1 underline">
          {" "}
          Projects <a>Under construction</a>{" "}
        </div>
        <Grid container direction="column" justify="center" alignItems="stretch">
        
          <CardA></CardA>
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
