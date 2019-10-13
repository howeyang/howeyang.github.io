import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardSandbox from "../Cards/CardSandbox";
import Fade from "react-reveal/Fade";

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <Grid container direction="row" justify="center" alignItems="stretch">
            <Grid item xs={12} sm={12} md={12} className="overlay2 nameland">
              <Fade duration={2000}>
                <div>
                  <div className="white0 mobilepad"> Howe Yang </div>
                </div>
              </Fade>
              <Fade bottom>
                <p className="black2 mobilepad">
                  <label className="blackbutton">Developer & Game Designer</label>
                </p>
              </Fade>
              <Fade bottom duration={1250}>
                <div className="white2 mobilepad">
                  {" "}
                  Unity3D | Blender | Digital Art
                </div>
              </Fade>
            </Grid>

            <CardExperience delay={100}/>
            <CardAutobattler delay={250}/>
            <CardSandbox delay={400}/>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
