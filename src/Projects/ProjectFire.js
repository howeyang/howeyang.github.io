import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import { Player } from "video-react";
import thumbfire1 from "../Images/Thumbnails/ThumbFire1.png";
import thumbfire2 from "../Images/Thumbnails/ThumbFire2.png";

class ProjectFire extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#af4154";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientSoftYellow");
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientSoftYellow");
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div className="emptySpace"></div>
          <div className="titleContainer">
            <div className="landingTextContainer">
              <div className="bannerWhite centerText">
                <div className="bannerMoveBottom">Stylized Fire ● </div>{" "}
                <div className="bannerMoveTop">Unity Shader</div>
              </div>
            </div>
          </div>
          <div className="emptySpace"></div>
          <Fade delay={500}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={0}
              className="centerElement"
            >
              <Grid item xs={2} sm={2} md={3} className=""></Grid>
              <Grid
                item
                xs={8}
                sm={8}
                md={6}
                className="workHeaderSection workSubtitle"
              >
                <labelBigText>Stylized Fire Shader</labelBigText>
                <br></br> Written in HLSL Shader Script <br></br> Completed in
                2020{" "}
              </Grid>
              <Grid item xs={2} sm={2} md={3} className=""></Grid>
              <Grid item xs={12} sm={12} md={12} className="workSection">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                  spacing={1}
                  className="centerElement"
                >
                  <Grid item xs={11} sm={11} md={3} className="">
                    <div className="smallPadding mediumText leftText">
                      <labelBigText>
                        The Inspiration <br></br>
                      </labelBigText>
                      In 2020, I needed to make a Fire effect for a prototype at
                      work. However, I was only familiar with making fire with
                      Particle Systems in Unity.
                      <div className="emptySpaceFloat"></div>
                      In my off time, I decided to investigate how to make
                      stylized Fire Shaders so that I wouldn't be caught flat
                      footed! To make this fire shader, I leaned into my
                      knowledge on Water Shaders and watched a great talk by
                      Simon Schreibt on Rime VFX. Although the talk was from the
                      perspective from Unreal Engine - it gave the underlying
                      understanding of the math and process behind making a
                      great fire shader!
                    </div>
                  </Grid>

                  <Grid item xs={11} sm={11} md={4} className="">
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      className="leftText mediumText"
                    >
                      {" "}
                      <labelBigText className="underline">
                        The Plan
                      </labelBigText>{" "}
                      <br />
                      This Unity Project was a study on how to use Shaders to
                      create stylized fire. This fire shader uses a mix of noise
                      texture, uv distortion and custom made textures to create
                      this stylized effect.
                      <div className="emptySpaceFloat"></div>
                      <labelWork>The Iterative Process </labelWork> <br />
                      The following is how I approached making this stylized
                      fire shader:
                      <Grid
                        item
                        xs={11}
                        sm={11}
                        md={12}
                        className="leftText mediumText section"
                      >
                        <div className="list">
                          <li>
                            1. Render 2 colors with their own perlin noise
                          </li>
                          <li>
                            2. Creating a weight with perlin noise and a
                            gradient
                          </li>
                          <li>
                            3. Making my own weight texture based on RGB to
                            color different layers
                          </li>
                          <li>
                            4. Making it fit my idea of how the fire should look
                          </li>
                          <li>
                            5. Adding HDR color so it can have bloom effects!
                          </li>
                        </div>
                      </Grid>
                      <labelBigText className="underline">
                        Learnings
                      </labelBigText>{" "}
                      <br />
                      <span>
                        {" "}
                        ● Painting Weight Textures and using that to drive logic{" "}
                      </span>{" "}
                      <br></br>
                      <span> ● Making a Shader that has HDR values </span> so
                      that it can have bloom intensity and effects <br></br>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={3} className="">
                    <div className="smallPadding">
                      <labelBigText>
                        Videos <br></br>
                      </labelBigText>
                    </div>

                    <div className="">
                      <labelWork>Completed Shader</labelWork>
                    </div>

                    <Player
                      poster={thumbfire1}
                      src="./fire/firevideo.mp4"
                      preload={"none"}
                      muted={true}
                      loop={true}
                    />

                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>Progress Over Time</labelWork>
                    </div>

                    <Player
                      poster={thumbfire2}
                      src="./fire/fire_side_x_side.mp4"
                      preload={"none"}
                      muted={true}
                      loop={true}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>
    );
  }
}

export default ProjectFire;
