import React from "react";
import { useState } from "react";
import Add from "./add";
class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <Add />
      </div>
    );
  }
}
class OldComponent extends React.Component {
  render() {
    return <div {...this.props}></div>;
  }
}
class Button extends React.Component {
  render() {
    return (
      <button {...this.props} className="addbtn">
        ADD
      </button>
    );
  }
}
class Butto extends React.Component {
  render() {
    return (
      <button {...this.props} className="addbtn">
        ADD
      </button>
    );
  }
}
class Controller extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      clicked: true,
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        {this.state.clicked ? <NewComponent /> : null}
      </div>
    );
  }
}

export default Controller;
