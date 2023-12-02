import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class NoMatch extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.className = "fourofourX";
    document.querySelector("body").style.background = "#e1771b";
  }
  componentWillUnmount() {
    document.body.className = null;
  }

  render() {
    return (
      <div>
        <div>
          <div className="titleContainer titleText">
            <div className="bannerMoveBottom">
              <div className="bannerWhite">Error </div>
            </div>{" "}
            <div className="bannerOutline bannerMoveTop">Page Not Found</div>
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
            xs={12}
            sm={12}
            md={12}
            className="leftContainer forceHeight"
          >
            <Fade up>
              <div className="whiteText" title="how did u get here??">
                {" "}
                This is a little awkward ... you reached an undeclared page.
                <br></br> Please use the Navigation bar to return to working
                pages!
              </div>
              <br></br>
              <div className="subtitleText">
                Feel free to contact me at info@howeyang.com so I can fix this!
              </div>
            </Fade>
          </Grid>
        </Grid>
        <div className="fourofour"> </div>
      </div>
    );
  }
}

export default NoMatch;
