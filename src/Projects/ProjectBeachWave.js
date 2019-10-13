import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class ProjectBeachWave extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade duration={2000}>
          <div className="white1">Beach Wave</div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade up>
              <p className="black3">
                <label className="blackbutton">Introduction</label>
              </p>
              <p className="section">
                <label>The Prompt</label> <br />
                While browsing /r/Unity3D, there was an interesting video of a
                wave lightly crashing with a beach by /u/neural-bot via Shader
                Graph There was a simple beauty there, a stylized form of water
                and foam, with a gentle motion giving it a natural feeling.
                Looking into the comments, this video itself was inspired by a
                picture by Owen Pomery's 'quick water study'. From this image
                and a general idea of how shaders work, I tried to reproduce the
                effect without any hand holding and to challenge myself to pick
                up the skills to mimic the effect.
                <br />
                <label>The Start</label> <br />
                My scene was a cube angled to look like a ramp and a horizontal
                plane intersecting ontop of it...
                
                <br /><label>Work in Progress!</label> <br />
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade up>
            <p className="black3">
                <label className="blackbutton">Next Section</label>
              </p>
              <p className="section">
              <label>Work in Progress!</label> <br />
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectBeachWave;
