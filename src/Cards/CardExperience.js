import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

class CardExperience extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Work");
  }

  render() {
    return (
      <div className="hvr-sweep-to-right2">
        <div className="hvr-sweep-to-right workexperience">
          <div className="hvr-sweep-to-right3">
          
              <Card className="glow cardBackground">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("../Images/card/card-battlerun.png")}
                    title="Upsight and Game Hive!"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom={false}
                      variant="h3"
                      component="h3"
                      className="cardHeader"
                    >
                      Work Experience
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                      <label2>Unity3D | Mobile Games</label2>
                      <div className="whiteText">
                        <b>Game Hive</b> <label2>2019 - 2024</label2>
                        <br></br>
                        <b>Unity Developer + Producer</b>
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
           
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardExperience);
