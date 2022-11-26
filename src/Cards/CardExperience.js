import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Box from "@material-ui/core/Box";

class CardExperience extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Experience");
  }

  render() {
    return (
      <div className="hvr-sweep-to-right2">
        <div className="hvr-sweep-to-right workexperience">
          <div className="hvr-sweep-to-right3">
            <Fade delay={this.props.delay}>
              <Card>
                <CardActionArea onClick={this.redirect}>
                  <Box color="white" p={0} className="toprightanchor">
                    Work
                  </Box>
                  <div className="testpadding">
                    <CardMedia
                      className="card card-highlight glow"
                      image={require("../Images/card/card-work.png")}
                      title="Upsight and Game Hive!"
                    >
                      <Box color="white" p={0} className="imagetext">
                        Bottom Text
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

export default withRouter(CardExperience);
