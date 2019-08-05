import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Snackbar from "@material-ui/core/Snackbar";

class ContactPage extends Component {
  constructor(props) {
    super();
    this.state = {
      snack_show: false
    };

    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  copyToClipboard() {
    var textField = document.createElement("textarea");
    textField.innerText = "howechyang@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    this.setState(state => ({
      snack_show: true
    }));
  }

  handleClose(){
    this.setState(state => ({
      snack_show: false
    }));
  }

  render() {
    return (
      <div>
         <Fade duration={2000} >
          <div className="white1 underline">Contact me</div>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="black3">Email</div>
              <p className="section">
                You can email and reach me at{" "}
                <u className="custom_button" onClick={this.copyToClipboard}>
                  howechyang@gmail.com
                </u>
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="black3">Other Sites</div>
              <div className="section">
                <p>
                  <a className="floatleft"> Github : </a>
                  <a
                    className="custom_button floatright"
                    href="https://github.com/howeyang"
                    target="_blank"
                  >
                    https://github.com/howeyang
                  </a>
                </p>
                <p>
                  <a className="floatleft"> Linkedin : </a>
                  <a
                    className="custom_button floatright"
                    href="https://ca.linkedin.com/in/howeyang"
                    target="_blank"
                  >
                    https://ca.linkedin.com/in/howeyang
                  </a>
                  <br />
                </p>
                <p>
                  <a className="floatleft">Itch.io : </a>
                  <a
                    className="custom_button floatright"
                    href="https://howeyang.itch.io"
                    target="_blank"
                  >
                    https://howeyang.itch.io
                  </a>
                </p>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="black2">
                {" "}
                Thank you for visiting!
                <br /> I will be adding more content periodically.
              </div>
            </Fade>
          </Grid>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={this.state.snack_show}
            onClose={this.handleClose}
            autoHideDuration={2000}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id" className="middle">Copied to Clipboard!</span>}
          />
        </Grid>
      </div>
    );
  }
}

export default ContactPage;
