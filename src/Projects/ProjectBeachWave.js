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
                <label className="blackbutton">Summary</label>
              </p>
              <p className="section">
                <label>Water Shader</label> <br />
                This Unity Project was a study on how to use Shaders to create
                stylized water. The water shader uses a mix of trigonometry  to create the curvature, noise texture and thresholds to create foam and caustics and passing along the right variables from vertex to fragment shader to get the right effect.
                <br /><br></br>
                <label>The Challenges</label>
                <ul className="list">
                  <li>
                    <span>Writing HLSL (vertex and fragment shader code)</span> is always an
                    interesting problem to tackle due to how you work directly with vertexes and colours.
                  </li>
                  <li>
                    <span>Figuring out how to correctly leverage noise textures </span> to create various water
                    effects while avoid creating obvious artifacts and tiling.
                  </li>
                </ul>
                <label>The Lessons</label>
                <ul className="list">
                  <li>
                    <span>Shaders are magical and not that scary</span> as they have such great performance and can lead to beautiful effects.
                  </li>
                  <li>
                    <span>Piecemealing the Shader code is helpful in visualizing </span> how each parameter or code change can impact the final look.
                  </li>
                </ul>
                <br></br> 
                <b>Read below for how my journey in creating this!</b>
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
                <label className="blackbutton">The Start</label>
              </p>
              <p className="section">
                <label>The Prompt</label> <br />
                While browsing /r/Unity3D, there was a video of a wave lightly
                crashing with a beach by /u/neural-bot who used Shader Graph.
                This video itself was inspired by a picture by Owen Pomery,
                'Quick Water Study'.
                <br></br>
                <br></br>
                There was a simple beauty there, an isolation of stylized water
                and foam, with a gentle motion ebb and flow giving it a natural
                feeling and beautiful aesthetic. From this video and from my
                previous experience in Unity, I challenged myself to reproduce
                the effect!
                <br />
                <label>The Start</label> <br />
                My previous tinkering with making waves has helped me understand
                the best way to create water effects in Unity is via{" "}
                <span>Shaders</span>. Scripting a plane's mesh and modifying
                material properties leaves too many artifacts and doesn't result
                in a convincing wave. <br></br>I began my scene with a Probuild Cube
                modified to look like a ramp and a horizontal plane intersecting
                into it. From there, I set a sand like material for the ramp and
                began writing a custom Shader for the plane which would
                represent my water.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={200}>
              <p className="black3">
                <label className="blackbutton">Writing the Water Shader</label>
              </p>
              <p className="section">
                <label>The Plan</label> <br />
                To reverse engineer and implement this ideal stylized water
                effect to life, I broke it down to a series of components that I needed to create.
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
