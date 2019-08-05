import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class ProjectGameJam extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
         <Fade duration={2000} >
          <div className="white1 underline">Game <a>Jamming</a></div>
          <div className="white2">
            Requires preperation, focus and discpline.
          </div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade up>
              <div className="black3">GMTK 2019 - Only One</div>
              <p className="section">
                <label>Brainstorming</label> <br />
                For the most part, brainstorming is a fun and easiest part of a Game Jam.
                <br />
                <label>Execution</label> <br />
                This turned out to be much harder than I thought.
                Need to prepare more script. Practise coding parts.
                Prepare scripts and assets beforehand.
                Break it down into steps to make it easier to manage.
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectGameJam;
