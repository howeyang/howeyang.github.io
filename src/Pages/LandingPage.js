import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardExperience from "../Cards/CardExperience";
import CardAutobattler from "../Cards/CardAutobattler";
import CardProjects from "../Cards/CardProjects";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

class LandingPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector('body').style.background = '#29B6F6';
    document.querySelector('.gradientBackground').classList.add('gradientBlue');  
    console.log('remount');  
  }

  componentWillUnmount(){
    document.querySelector('.gradientBackground').classList.remove('gradientBlue');
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            className="landingContainer"
          >
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              className="leftContainer forceHeight"
            >
              <Fade duration={2000}>
                <div>
                  <div className="mixDifference"> Left Container </div>
                  <div className="mixDifference active"> Left Container </div>
                  <div className=" cardInfo mixDifference"> Left Container
                  </div>
                </div>
              </Fade>
            </Grid>

            <Grid
              item
              xs={4}
              sm={4}
              md={4}
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
              xs={4}
              sm={4}
              md={4}
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

export default LandingPage;
