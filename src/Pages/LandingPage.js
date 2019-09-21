import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardA from "../Cards/CardA";
import CardB from "../Cards/CardB";
import CardC from "../Cards/CardC";
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
            <Grid item xs={12} sm={12} md={12} className="overlay2 nameland">
            <Fade duration={2000} >
            <div>
              <div className="white1"> Howe Yang </div>
              </div>
              </Fade>
              <Fade bottom>
              <div className="black2"> Developer & Game Designer</div>
              </Fade>
              <Fade bottom duration={1150}>
              <div className="white2"> Unity3D | Blender | ReactJS</div>
              </Fade>
            </Grid>
          
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
