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
            <label className="blackbutton">Relaxing and mesmerizing</label>
          </p>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={200}>
              <p className="black3">
                <label className="blackbutton">Introduction</label>
              </p>
              <p className="section">
                <label>The Prompt</label> <br />
                While browsing /r/Unity3D, there was an interesting video of a
                wave lightly crashing with a beach by /u/neural-bot who used
                Shader Graph. This video itself was inspired by a picture by
                Owen Pomery, 'Quick Water Study'.
                <br></br>
                <br></br>
                There was a simple beauty and inspiration here, a stylized form
                of water and foam, with a gentle motion giving it a natural
                feeling and polished feeling beyond toon shading, From this
                video and from my previous experience of shaders, I challenged
                myself to reproduce the effect.
                <br />
                <label>The Start</label> <br />
                My previous tinkering with making waves has helped me understand
                the best way to create water in Unity is via <span>Shaders</span>. Scripting
                a plane's mesh and modifying material properties leaves too many
                artifacts and doesn't result in a convincing wave. I began my
                scene with a Probuild Cube modified to look like a ramp and a
                horizontal plane intersecting into it. From there, I set a sand
                like material for the ramp and began writing a custom Shader for
                the plane which would represent my water.
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={400}>
              <p className="black3">
                <label className="blackbutton">Latest Capture</label>
              </p>
              <div className="section">
                <ReactPlayer
                  url="./beachwave.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={200}>
              <p className="black3">
                <label className="blackbutton">Writing the Water Shader</label>
              </p>
              <p className="section">
                <label>The Plan</label> <br />
                This case study was also a challenge to myself to think of ways
                to reverse engineer and implement this ideal stylized water
                effect to life.
                <br></br>
                There are a couple of components I needed to create, each
                a piece of the puzzle.
                <ul className="list"> 
                  <li>1. Distorting the Plane mesh to Curve like a wave.</li>
                  <li>2. Making the Plane mesh ebb and flow like a wave.</li>
                  <li>
                    3. Colouring the wave based on depth difference between
                    plane and ramp.
                  </li>
                  <li>4. Adding a hard white line at rim of plane.</li>
                  <li>5. Adding foam effects that ebb and flow with Noise.</li>
                  <li>6. Polish and Iterate on everything!</li>
                </ul>
              </p>
            </Fade>
          </Grid>

          <div className="white1">Work in Progress!</div>
        </Grid>
      </div>
    );
  }
}

export default ProjectBeachWave;
