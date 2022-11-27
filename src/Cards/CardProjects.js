import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Box from "@material-ui/core/Box";

class CardProjects extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project");
  }

  render() {
    return (
      <div className="hvr-sweep-to-right2">
        <div className="hvr-sweep-to-right sandbox">
          <div className="hvr-sweep-to-right3">
            <Fade delay={this.props.delay}>
              <Card>
                <CardActionArea onClick={this.redirect}>
                  <Box p={0} className="toprightanchor gradientBlue">
                    &nbsp; Personal &nbsp;
                  </Box>
                  <div className="cardpadding">
                    <CardMedia
                      className="card card-highlight glow"
                      image={require("../Images/fire_end.gif")}
                      title="Smashing rocks together~"
                    >
                      <Box p={0} className="imagetext mixDifference">
                        Projects and Case Studies
                      </Box>
                    </CardMedia>
                  </div>
                </CardActionArea>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardProjects);
