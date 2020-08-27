import React, { Component } from "react";

class Content extends Component {
  render() {
    var contentClass = this.props.isOpen ? "content open" : "content";
    return <div className={contentClass}>I am main content !!!</div>;
  }
}

export default Content;
