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
            <label className="blackbutton">Shader Case Study</label>
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
                stylized water. My water shader uses a mix of trigonometry to
                create the curvature, noise texture and thresholds to create
                this stylized effect.
                <br></br>
                <label>Part 1 : My own approach </label> <br />
                Initially, I decided to see if I could do my own reverse
                engineering to figure out what is necessary to make a Water
                Shader :
                <ul className="list">
                  <li>
                    ● Deform a plane to give the impression of water ebb and
                    flow
                  </li>
                  <li>
                    ● Using a Noise Texture and Thresholds to create White Foam
                    effects
                  </li>
                  <li>
                    ● Using Camera Depth and layering Color Gradients to create
                    the blue colour
                  </li>
                </ul>
                <label>Part 2 : Research and Layering Effects</label> <br />
                At this point, my shader was decent but still had room for
                improvement! Via Simon Schreibt's talk on how his team created
                stylized water in Rime, I added on the following features :
                <ul className="list">
                  <li>
                    ● Adding motion to Foam texture and switch to a line texture
                  </li>
                  <li>● Adding Caustic and illumation lines to the water</li>
                  <li>● Adding fake reflections to the water</li>
                </ul>
                <b>Read below for my journey in creating this!</b>
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={400}>
              <p className="black3">
                <label className="blackbutton">Shader Breakdown</label>
              </p>
              <div className="section">
                <ReactPlayer
                  url="./breakdown.mp4"
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
                <label>Beginnings</label> <br />
                My previous tinkering with making waves has helped me understand
                the best way to create water effects in Unity is via{" "}
                <span>Shaders</span>. Scripting a plane's mesh and modifying
                material properties leaves too many artifacts and doesn't result
                in a convincing wave. <br></br>I began my scene with a Probuild
                Cube modified to look like a ramp and a horizontal plane
                intersecting into it. From there, I set a sand like material for
                the ramp and began writing a custom Shader for the plane which
                would represent my water.
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
                effect to life, I broke it down to a series of components that I
                needed to create.
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

          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={200}>
              <p className="black3">
                <label className="blackbutton">The Challenges</label>
              </p>
              <p className="section">
                <label>Vertex and Frag Shader</label>
                <br></br>
                <span>Writing HLSL (vertex and fragment shader code)</span> is
                always an interesting problem to tackle due to how you work
                directly with vertexes and colours.
                <br></br>
                <label>Manipulating Noise Textures</label>
                <br></br>
                <span>
                  Figuring out how to correctly leverage noise textures{" "}
                </span>{" "}
                to create various water effects while avoid creating obvious
                artifacts and tiling.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={200}>
              <p className="black3">
                <label className="blackbutton">Lessons learned!</label>
              </p>
              <p className="section">
                <label>The Lessons</label>
                <ul className="list">
                  <li>
                    <span>● Shaders are magical and not that scary</span> as
                    they have such great performance and can lead to beautiful
                    effects.
                  </li>
                  <li>
                    <span>
                      ● Piecemealing the Shader code is helpful in visualizing{" "}
                    </span>{" "}
                    how each parameter or code change can impact the final look.
                  </li>
                  <li>
                    <span>
                      ● Working with Textures in Shaders is non-trivial
                    </span>
                  </li>
                </ul>
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectBeachWave;
