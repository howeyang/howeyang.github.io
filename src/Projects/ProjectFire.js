import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";

class ProjectFire extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade duration={2000}>
          <div className="white1">
            Project: <span> Fire Shader</span> Nov 2020
          </div>
          <p className="black3">
            <label className="blackbutton">
              Building a Toon Stylized Fire
            </label>
          </p>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <p className="black3">
                <label className="blackbutton">Summary</label>
              </p>
              <p className="section">
                <label>Fire Shader</label> <br />
                This Unity Project was a study on how to use Shaders to create stylized fire. My fire shader uses a mix of noise texture, uv distortion and custom made textures to create this stylized effect.
                <br />
                <label>Part 1 : Research and Trying things out!</label> <br />
                In 2020, I needed to make a Fire effect for prototype at work. However, I was only familiar with making fire with Particle Systems in Unity. In my off time, I decided to investigate how to make stylized Fire Shaders so that I wouldn't be caught flat footed!
                To make this fire shader, I leaned into my knowledge on Water Shaders and watched a great talk by Simon Schreibt on Rime VFX. Although the talk was from the perspective from Unreal engine - it gave the underlying understanding of the math behind making a great fire shader! <br />{" "}
                
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={300}>
              <p className="black3">
                <label className="blackbutton">Latest Capture</label>
              </p>
              <div className="section">
                <ReactPlayer
                  url="./fire/fire_side_x_side.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                  loop={true}
                />
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={200}>
              <p className="black3">
                <label className="blackbutton">Going from Water to Fire</label>
              </p>
              <p className="section">
                <label>What I learned</label> <br />
                WIP 
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectFire;
