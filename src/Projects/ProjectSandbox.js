import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import ReelSandboxWave from "../Reels/ReelSandboxWave";
import ReelSandboxShader from "../Reels/ReelSandboxShader";
import ReelSandboxParticle from "../Reels/ReelSandboxParticle";


class ProjectSandbox extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade duration={2000} >
          <div className="white1 underline">
            Prototyping <a>Sandboxing</a>
          </div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={12} md={12}>
            <Fade>
              <div className="black3"> Introduction</div>
            </Fade>
            <Fade up>
              <p className="section">
                This is a dedicated section to concepts and things I've been
                experimenting with in Unity. There are a ton of cool effects and
                concepts in games and media. On occasion, I challenge myself to
                research and re-create the math and logic that can duplicate
                some of these effects.
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} className="overlay2">
            <Fade>
              <div className="black3">PS4 Wave</div>
            </Fade>
            <Fade left>
            <div className="section">
              <p >
                <label>Summary</label> <br />
                The PS4 home screen is a beautiful yet simple wave with softly
                emitting particles. I wanted to challenge myself to re-create it in Unity.
                <br />
                <label>Challenge and Solution</label> <br />
                The major challenge is an issue with aliasing artifacts. Even
                when bumping the number vertices of the plane I was using to
                40,000 tries and decreasing the amount of deviation between
                points, aliasing was still apparent. As a solution, I decided
                that it might not be possible to have beautiful with a 2D plane
                by itself. With a texture with transparent edges, it is possible
                to almost eliminate aliasing significantly.
              </p>
              <ReelSandboxWave />
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="black3">Shaders</div>
            </Fade>
            <Fade right>
            <div className="section">
              <p>
                <label>Summary</label> <br />
                After watching the Youtube Tutorials by Dan Moran, "Making Stuff look good in Unity", I tried my hand at making building shaders via scripting and Unity's Node Shader.
                <br />
                <label>Considerations</label> <br />
                Shaders and graphic effects are something that I want to understand and utilize.
                There is definitely a steep learning curve and even after taking one of the best ( and hardest ) 4th year Graphics course at Waterloo, it's still magic to me.
                Hopefully down the line, I'll be able to put some time in to create better SFX.
                
              </p>
              <ReelSandboxShader />
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={12} md={12} className="overlay2">
            <Fade>
              <div className="black3">Unity Particle System</div>
            </Fade>
            <Fade left>
            <div className="section">
              <p >
                <label>Summary</label> <br />
                One of the most powerful and flexible systems in Unity is the Particle system.
                I have leveraged it to add some flair and polish for impact and as a visual effect.
                <br />
                <label>Challenges</label> <br />
                There is a slight learning curve to the Particle system, understanding how to use new texture, material and turn all the knobs in the System to get a new effect.
                Once you have that down though, the limit is your imagination and effort in making a cool effect!
                
              </p>
              
              <ReelSandboxParticle />
              </div>
             
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectSandbox;
