import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class NoMatch extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            {" "}
            404 Page<a />{" "}
          </div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          
          <Grid item xs={12} sm={10} md={10}>
            <Fade up>
            <div className="black3" title="how did u get here??"> This is a little awkward ... you tried to reach an undeclared page.
            <br></br> Please use the Navigation bar to return to working pages!
            
            <br></br>
            <a>Feel free to contact me at howechyang@gmail.com so I can fix this!</a>
            </div>
           
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NoMatch;
