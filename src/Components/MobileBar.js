import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

//Holy crap i built something Snazzy!!! woooo

class MobileBar extends Component {
  constructor(props) {
    super();

    this.state = {
      active: false,
      menutext : 'Menu'
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
    this.props.history.push("/Experience");
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
                  this.state.active ? "menubutton active closemenu" : "menubutton"
                }
                onClick={this.handleClick}
              >
                {this.state.active ? "Close" : "Menu"}
              </a>
            </li>
            <Fade collapse when={this.state.active} duration={100}>
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
            <Fade collapse when={this.state.active} duration={300}>
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
            <Fade collapse when={this.state.active} duration={600}>
              <ul className={
                  this.state.active ? "header top4 visiblenav" : "hidden"} >
                <li>
                  <a className={
                  this.state.active ? "menubutton active" : "hidden"} onClick={this.redirectAbout}>
                    Experience
                  </a>
                </li>
              </ul>
            </Fade>
            <Fade collapse when={this.state.active} duration={900} >
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
