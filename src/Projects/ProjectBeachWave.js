import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import { Player } from "video-react";
import thumbwave from "../Images/Thumbnails/ThumbWave.png";
import thumbbreakdown from "../Images/Thumbnails/ThumbBreakdown.png";

class ProjectBeachWave extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#3C73A8";
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
                <div className="bannerMoveBottom">Beach Wave ● </div>{" "}
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
                <labelBigText>Beach Water Shader</labelBigText>
                <br></br> Written in HLSL Shader Script <br></br> Completed in
                2019{" "}
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
                      While browsing /r/Unity3D, there was a video of a wave
                      lightly crashing with a beach by /u/neural-bot who used
                      Shader Graph. This video itself was inspired by a picture
                      by Owen Pomery, 'Quick Water Study'.
                      <br></br>
                      <br></br>
                      There was a simple beauty there, an isolation of stylized
                      water and foam, with a gentle motion ebb and flow giving
                      it a natural feeling and beautiful aesthetic. From this
                      video and from my previous experience in Unity, I
                      challenged myself to reproduce the effect!
                      <div className="textdivider">
                        {" "}
                        <div class="dot"></div>{" "}
                      </div>
                      <labelWork>Beginnings</labelWork> <br />
                      My previous tinkering with making waves has helped me
                      understand the best way to create water effects in Unity
                      is via <span>Shaders</span>. Scripting a plane's mesh and
                      modifying material properties leaves too many artifacts
                      and doesn't result in a convincing wave. <br></br>I began
                      my scene with a Probuild Cube modified to look like a ramp
                      and a horizontal plane intersecting into it. From there, I
                      set a sand like material for the ramp and began writing a
                      custom Shader for the plane which would represent my
                      water.
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
                      create stylized water. My water shader uses a mix of
                      trigonometry to create the curvature, noise texture and
                      thresholds to create this stylized effect.
                      <div className="emptySpaceFloat"></div>
                      <labelWork>Step 1 : My own Naive Approach</labelWork>{" "}
                      <br />
                      Initially, I decided to see if I could do my own reverse
                      engineering to figure out what is necessary to make a
                      Water Shader :
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className="leftText mediumText section"
                      >
                        <span>
                          {" "}
                          ● Deform a plane to give the impression of water ebb
                          and flow{" "}
                        </span>{" "}
                        <br></br>
                        <span>
                          {" "}
                          ● Using a Noise Texture and Thresholds to create White
                          Foam effects{" "}
                        </span>{" "}
                        <br></br>
                        <span>
                          {" "}
                          ● Using Camera Depth and layering Color Gradients to
                          create the blue colour{" "}
                        </span>{" "}
                        <br></br>
                      </Grid>
                      <div className="emptySpaceFloat"></div>
                      <labelWork>
                        Step 2 : Research and Layering Effects{" "}
                      </labelWork>{" "}
                      <br />
                      At this point, my shader was decent but still had room for
                      improvement! Via Simon Schreibt's talk on how his team
                      created stylized water in Rime, I reverse engineered a
                      plan!
                      <Grid
                        item
                        xs={11}
                        sm={11}
                        md={12}
                        className="leftText mediumText section"
                      >
                        <div className="list">
                          <li>
                            1. Distorting the Plane mesh to Curve like a wave.
                          </li>
                          <li>
                            2. Making the Plane mesh ebb and flow like a wave.
                          </li>
                          <li>
                            3. Colouring the wave based on depth difference
                            between plane and ramp.
                          </li>
                          <li>4. Adding a hard white line at rim of plane.</li>
                          <li>
                            5. Adding foam effects that ebb and flow with Noise.
                          </li>
                          <li>6. Polish and Iterate on everything!</li>
                        </div>
                      </Grid>
                      <labelBigText className="underline">
                        Learnings
                      </labelBigText>{" "}
                      <br />
                      <span>
                        {" "}
                        ● Figuring out how to correctly leverage noise textures{" "}
                      </span>{" "}
                      to create various water effects while avoid creating
                      obvious artifacts and tiling.
                      <br></br>
                      <span>
                        {" "}
                        ● Piecemealing the Shader code is helpful in visualizing{" "}
                      </span>{" "}
                      how each parameter or code change can impact the final
                      look. <br></br>
                      <span> ● Texture are a simple and efficient way </span> to
                      create visual effects if used properly{" "}
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
                      poster={thumbwave}
                      src="./target2.mp4"
                      preload={"none"}
                      muted={true}
                      loop={true}
                    />

                    <div className="emptySpaceFloat"></div>

                    <div className="">
                      <labelWork>Layering Effects</labelWork>
                    </div>

                    <Player
                      poster={thumbbreakdown}
                      src="./breakdown.mp4"
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

export default ProjectBeachWave;
