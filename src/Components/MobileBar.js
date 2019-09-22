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
          <ul className="header visiblenav">
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
            <Fade collapse when={this.state.active} duration={500}>
              <ul className={
                  this.state.active ? "header top2 visiblenav" : "hidden" }>
                <li>
                  <a className={
                  this.state.active ? "menubutton active" : "hidden"} onClick={this.redirectHome}>
                    Home
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade collapse when={this.state.active} duration={800}>
              <ul className={
                  this.state.active ? "header top3 visiblenav" : "hidden"} >
                <li>
                  <a className={
                  this.state.active ? "menubutton active" : "hidden"} onClick={this.redirectProject}>
                    Projects
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade collapse when={this.state.active} duration={1100}>
              <ul className={
                  this.state.active ? "header top4 visiblenav" : "hidden"} >
                <li>
                  <a className={
                  this.state.active ? "menubutton active" : "hidden"} onClick={this.redirectAbout}>
                    About Me
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade collapse when={this.state.active} duration={1300} >
              <ul className={
                  this.state.active ? "header top5 visiblenav" : "hidden"}>
                <li>
                  <a className={
                  this.state.active ? "menubutton active" : "hidden"} onClick={this.redirectContact}>
                    Contact
                  </a>
                </li>
              </ul>
            </Fade>
          </ul>
      </div>
    );
  }
}

export default withRouter(MobileBar);
