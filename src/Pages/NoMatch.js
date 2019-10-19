import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class NoMatch extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.className = 'fourofourX';
  }
  componentWillUnmount() {
    document.body.className = null;
}

  render() {
    return (
      <div>
        <Fade duration={2000} >
          <div className="white1 underline">
            404 Page
          </div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          
          <Grid item xs={12} sm={10} md={10}>
            <Fade up>
            <div className="black3" title="how did u get here??"> This is a little awkward ... you reached an undeclared page.
            <br></br> Please use the Navigation bar to return to working pages!
            </div>
            <br></br>
            <div className="white2">Feel free to contact me at howechyang@gmail.com so I can fix this!</div>
            
           
            </Fade>
          </Grid>
        </Grid>
        <div className="fourofour"> </div>
      </div>
    );
  }
}

export default NoMatch;
