import React, { Component } from "react";
import CardAutobattler from "../Cards/CardAutobattler";
import CardSandbox from "../Cards/CardSandbox";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Hidden from "@material-ui/core/Hidden";
import CardReact from "../Cards/CardReact";
import CardBeach from "../Cards/CardBeach";
import CardFire from "../Cards/CardFire";
import unitylogo from "../Images/landing/unity_logo.png";

class PageBattleRun extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("body").style.background = "#e1771b";
    document
      .querySelector(".gradientBackground")
      .classList.add("gradientOrange");
  }

  componentWillUnmount() {
    document
      .querySelector(".gradientBackground")
      .classList.remove("gradientOrange");
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <div>
            <div className="titleContainer titleText">
              <div className="bannerMoveBottom">
                <div className="bannerWhite">Battle </div>
              </div>{" "}
              <div className="bannerOutline bannerMoveTop">Run</div>
            </div>
          </div>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="landingContainer"
          >
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              className="leftContainer forceHeight"
            >
              <Fade duration={1000} delay={800}>
                <div>
                  <div className="whiteText leftText section">
                    <div className="whiteText bigText"> Game Developer </div>
                    <div className="centerElement subtitleText">
                      <img
                        src={unitylogo}
                        alt="Unity"
                        className="fixedimg circle centerElement"
                      />
                      <span className="subBanner"> Unity 3D Engine </span>
                    </div>

                    <div className="list">
                      <li>● Using Unity's 3D engine to build games in C#</li>

                      <li>● Using Unity Canvas System to Create UX / UI</li>

                      <li>● Wrote Shaders for Unity in HLSL</li>

                      <li>
                        ● Built and Released games on Google Play and Apple App
                        Store
                      </li>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade duration={1000} delay={1000}>
                <div>
                  <div className="whiteText leftText section">
                    <div className="whiteText bigText"> Education </div>
                    <div className="centerElement subtitleText">
                      <img
                        src={unitylogo}
                        alt="Unity"
                        className="fixedimg circle centerElement"
                      />
                      <span className="subBanner">
                        {" "}
                        University of Waterloo{" "}
                      </span>
                    </div>

                    <div className="list">
                      <li>● 2012-2016</li>
                    </div>
                  </div>
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              className="middleContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <div className=""> Middle Container </div>
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              className="rightContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <div className=""> right Container </div>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default PageBattleRun;
