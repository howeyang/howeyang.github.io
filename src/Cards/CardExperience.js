import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Fade from 'react-reveal/Fade';

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
            <Fade  delay={this.props.delay} >
              <Card className="glow">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("../Images/card/card-work.png")}
                    title="Upsight and Game Hive!"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom={false}
                      variant="h5"
                      component="h3"
                      className="whiteheader"
                    >
                      Work Experience
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                      <label>Unity3D |  Mobile Games</label>
                      <span className="whitefont">
                      <b>Game Hive</b> : Unity Developer + Producer
                      <br></br>
                        <b>Upsight</b> : Integration and Support
                         
                      
                         
                        </span> 
                      
                    </Typography>
                  </CardContent>
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
