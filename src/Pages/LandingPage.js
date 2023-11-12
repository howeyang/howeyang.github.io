import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardProjects from "../Cards/CardProjects";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            className="landingContainer"
          >
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              className="middleContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <div className=""> Left Container </div>
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              className="rightContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <div className=""> Middle Container </div>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
