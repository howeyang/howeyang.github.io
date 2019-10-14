import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";

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
        <Fade delay={200} bottom>
          <p className="black3">
            <label className="blackbutton">
              Relaxing and mesmerizing
            </label>
          </p>
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
                wave lightly crashing with a beach by /u/neural-bot who used Shader
                Graph. This video itself was inspired by a picture by Owen Pomery, 'Quick Water Study'.
                
                <br></br><br></br>
                There was a simple beauty and inspiration here, a stylized form of water
                and foam, with a gentle motion giving it a natural feeling and polished feeling beyond toon shading,
                 From this video
                and from my previous experience of shaders, I challenged myself to reproduce the
                effect.
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
                <label className="blackbutton">Latest Capture</label>
              </p>
              <p className="section">
              <ReactPlayer
                  url="./beachwave.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectBeachWave;
