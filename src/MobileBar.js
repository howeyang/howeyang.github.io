import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

//Holy crap i built something Snazzy!!! woooo

class MobileBar extends Component {
  constructor(props) {
    super();

    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.redirectProject = this.redirectProject.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.redirectAbout = this.redirectAbout.bind(this);
    this.redirectContact = this.redirectContact.bind(this);
  }

  redirectHome() {
    this.props.history.push("/");
    this.setState(state => ({
      active: !state.active
    }));
  }

  redirectProject() {
    this.props.history.push("/Project");
    this.setState(state => ({
      active: !state.active
    }));
  }

  redirectAbout() {
    this.props.history.push("/About");
    this.setState(state => ({
      active: !state.active
    }));
  }

  redirectContact() {
    this.props.history.push("/Contact");
    this.setState(state => ({
      active: !state.active
    }));
  }

  //Clicks
  handleClick() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <div>
        <Fade>
          <ul className="header">
            <li>
              <a
                className={
                  this.state.active ? "menubutton active" : "menubutton"
                }
                onClick={this.handleClick}
              >
                Menu
              </a>
            </li>
            <Fade right when={this.state.active} collapse>
              <ul className="header top2">
                <li>
                  <a className="menubutton active" onClick={this.redirectHome}>
                    Home
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade left when={this.state.active} collapse>
              <ul className="header top3">
                <li>
                  <a className="menubutton active" onClick={this.redirectProject}>
                    Projects
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade right when={this.state.active} collapse>
              <ul className="header top4">
                <li>
                  <a className="menubutton active" onClick={this.redirectAbout}>
                    About Me
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade up when={this.state.active} collapse>
              <ul className="header top5">
                <li>
                  <a className="menubutton active" onClick={this.redirectContact}>
                    Contact
                  </a>
                </li>
              </ul>
            </Fade>
          </ul>
        </Fade>
      </div>
    );
  }
}

export default withRouter(MobileBar);
