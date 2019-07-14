import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import CardA from "./CardA";
import CardB from "./CardB";

class LandingPage extends Component {

  render() {
    return (
      <div>
        <div className="grid_root">
          <Grid container direction="row" justify="center" alignItems="stretch">
            {/* First Item */}

            <Grid item xs={12} sm={6} md={6} className="overlay2">
              <div className="white1"> Howe Yang </div>
              <div className="black2"> Developer & Designer</div>
              <div className="white2"> Unity3D | Blender | ReactJS</div>
            </Grid>

            {/* Second Item */}

            <Grid
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

            <CardA />
            <CardB />
            <CardA />
            <CardB />
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
