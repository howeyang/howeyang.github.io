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
            justify="center"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} sm={12} md={12} className="overlay2 nameland">
              <Fade duration={2000}>
                <div>
                  <div className="white0 mobilepad"> Howe Yang </div>
                </div>
              </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Fade delay={300}>
                  <p className="black2 mobilepad">
                    <label className="blackbutton">
                      Obssessed with making things look good!
                    </label>
                  </p>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Fade bottom duration={1250}>
                  <div className="white2 mobilepad">
                    {" "}
                    Unity3D Developer | Learning VFX
                  </div>
                </Fade>
              </Grid>
            

            <Grid item xs={12} sm={6} md={3}>
              <CardExperience delay={100} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardProjects delay={250} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardAutobattler delay={400} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
