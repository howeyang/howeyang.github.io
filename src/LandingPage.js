import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardA from "./CardA";
import CardB from "./CardB";
import CardC from "./CardC";
import CardD from "./CardD";
import Fade from 'react-reveal/Fade';

class LandingPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div className="grid_root">
          <Grid container direction="row" justify="center" alignItems="stretch">
            {/* First Item */}
           
            <Grid item xs={12} sm={12} md={12} className="overlay2">
            <Fade top>
            <div>
              <div className="white1"> Howe Yang </div>
              </div>
              </Fade>
              <Fade bottom>
              <div className="black2"> Developer & Game Designer</div>
              <div className="white2"> Unity3D | Blender | ReactJS</div>
              </Fade>
            </Grid>
            

            {/* Second Item             <Grid
              item
              xs={12}
              sm={6}
              md={6}
              className="section container-overlay"
            >
              <h2 className="overlay">Most Recent Project: Auto battler</h2>
              <ReactPlayer
                url="autobattle.mp4"
                width="100%"
                height="100%"
                controls={true}
                playing
              />
            </Grid>
            */}
            <CardA />
            <CardB />
            <CardC />
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
