import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

class SmallCardBTB4 extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/BeatBoss4");
  }

  render() {
    return (
      <div className="hvr-sweep-to-right2">
        <div className="hvr-sweep-to-right sandbox">
          <div className="hvr-sweep-to-right3">
            <Fade delay={this.props.delay}>
              <Card className="glow cardBackground">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("../../Images/card/cardBTB4.jpg")}
                    title="Boom!"
                  />
                </CardActionArea>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SmallCardBTB4);
