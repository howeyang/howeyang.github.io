import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardProjects from "../Cards/CardProjects";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div className="half">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
              spacing={0}
            >
              <Grid item xs={12} sm={12} md={12}>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Fade delay={300}>
                  <div className="nametext">
                    Howe <br></br> Yang
                  </div>
                </Fade>
              </Grid>

              <Grid item xs={4} sm={4} md={4}>
                <Fade delay={300}>
                  <div className="nametext">
                    IMAGE <br></br>
                  </div>
                </Fade>
              </Grid>

              <Grid item xs={4} sm={4} md={4}>
                <Fade delay={300}>
                  <div className="">
                    Very long explanation
                    Developer and VFX enthusastic
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </div>

          <div className="half">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
              spacing={4}
            >
              <Grid item xs={12} sm={5} md={5}>
                <CardExperience delay={100} />
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
                <CardProjects delay={100} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
// <CardProjects delay={250} />
export default LandingPage;
