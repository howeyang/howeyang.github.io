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

  handleClose() {
    this.setState(state => ({
      snack_show: false
    }));
  }

  render() {
    return (
      <div>
        <Fade duration={2000}>
          <div className="white1">Contact me</div>
        </Fade>
        <Fade delay={200} bottom>
        <p className="black3 mobilepad">
                <label className="blackbutton">How to Reach out or Connect</label>
              </p>
        </Fade>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <Fade>
              <div className="section2">
              <p className="black3">
                <label className="blackbutton">Contact Info</label>
              </p>

                <Fade duration={1200}>
                  <div className="floatcontain">
                    <div className="floatleft">You can email and reach me at</div>
                    <u
                      className="custom_button floatright"
                      onClick={this.copyToClipboard}
                    >
                      howechyang@gmail.com
                    </u>
                  </div>
                </Fade>

                <Fade >
                  <div className="white2">Or find me at other sites!</div>
                </Fade>
                <Fade delay={200}>
                  <div className="floatcontain">
                    <div className="floatleft"> Github : </div>
                    <a
                      className="custom_button floatright"
                      href="https://github.com/howeyang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/howeyang
                    </a>
                  </div>
                </Fade>
                <Fade delay={300}>
                  <p className="floatcontain">
                    <div className="floatleft"> Linkedin : </div>
                    <a
                      className="custom_button floatright"
                      href="https://ca.linkedin.com/in/howeyang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ca.linkedin.com/in/howeyang
                    </a>
                    <br />
                  </p>
                </Fade>
                <Fade delay={400}>
                <p className="floatcontain">
                  <div className="floatleft">Itch.io : </div>
                  <a
                    className="custom_button floatright"
                    href="https://howeyang.itch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://howeyang.itch.io
                  </a>
                </p>
                </Fade>
              </div>
              
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Fade delay={200}>
              <div className="section2">
                <p className="paragraph">
                  Hi, my name is Howe Yang. I am a Canadian developer with a
                  passion for games.
                  <br />
                  <br /> My passion for games and coding started from early
                  exposure to books, animations and games. Powered by an
                  overactive imagination, I found myself pursuing video games
                  and development with my end goal of making things that can
                  inspire the next generation just like how I was!
                  <br></br>
                  <br />I love sketching out my thoughts, researching cool
                  visuals effects and learning different types of scripting. At
                  work, I always try to maintain a professional but fun
                  attitude. If I ever find myself with gaps in knowledge, I like
                  to reach out to others around me or research the topic to
                  figure it out. I enjoy most working with the system wide
                  features so that I can work with multiple components and
                  people!
                  <br></br>
                  <br />
                  If you want to collaborate or just need someone to bounce
                  ideas on, please feel to reach out to me!
                </p>
              </div>
            </Fade>
            <Fade>
              <div className="white2">
                {" "}
                Thank you for visiting!
                <br /> I will be adding more content periodically.
              </div>
            </Fade>
          </Grid>

          <Snackbar
            className="darkbluebg"
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
            message={
              <span id="message-id" className="middle">
                Copied to Clipboard!
              </span>
            }
          />
        </Grid>
      </div>
    );
  }
}

export default ContactPage;
