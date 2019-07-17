import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

class CardC extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push("/Project/ProjectB");
  }

  render() {
    return (
        <Grid item xs={12} sm={3} md={3} >
        <div className="hvr-sweep-to-right2">
          <div className="hvr-sweep-to-right sandbox">
            <div className="hvr-sweep-to-right3">
              <Card className="glow">
                <CardActionArea
                  onClick={this.redirect}
                  className="card-highlight"
                >
                  <CardMedia
                    className="card"
                    image={require("./card-sandbox.png")}
                    title="1 Star, 2 Star, 3 Star!"
                  />
                  <CardContent>
                  <Typography gutterBottom={false} variant="h6" component="h3" className="black2">
                      Prototyping & Sandboxing
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                    <label>Unity3D | Particles | Shaders</label>
                    <span>
                      Various special effects and prototypes : Original and reverse engineered ideas
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default withRouter(CardC);
