import React, { Component } from "react";

class SideBar extends Component {
  render() {
    var sidebarClass = this.props.isOpen ? "sidebar open" : "sidebar";
    return (
      <div className={sidebarClass}>
        <div>I slide into view</div>
        <div>Me too!</div>
        <div>Meee Threeeee!</div>
        <button onClick={this.props.toggleSidebar} className="sidebar-toggle">
          >
        </button>
      </div>
    );
  }
}

export default SideBar;
