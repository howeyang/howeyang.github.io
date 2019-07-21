import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

class ContactPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade down>
          <div className="white1 underline">
            {" "}
            Contact Me<a />{" "}
          </div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade up>
              <div className="black3">Email</div>
              <p className="section">
                You can email and reach me at <u>howechyang@gmail.com</u>
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade up >
              <div className="black3">Other Sites</div>
              <p className="section social">
                My Github is available here: <a></a>
                <a className="custom_button" href='https://github.com/howeyang' target="_blank">https://github.com/howeyang</a>
                <br></br>
                Linkedin : <a></a>
                <a className="custom_button" href='https://ca.linkedin.com/in/howeyang' target="_blank">https://ca.linkedin.com/in/howeyang</a>
              </p>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade up>
            <div className="black2"> Thank you for visiting!
            <br></br> I will be adding more content periodically.</div>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ContactPage;
