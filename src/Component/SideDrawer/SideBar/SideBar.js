import React, { Component } from "react";
import leftArrow from "../../../../asset/Images/left.svg";
import rightArrow from "../../../../asset/Images/right.svg";

class SideBar extends Component {
  render() {
    var sidebarClass = this.props.isOpen ? "sidebar open" : "sidebar";
    return (
      <div className={sidebarClass}>
        <div>I have slided</div>

        <button onClick={this.props.toggleSidebar} className="sidebar-toggle">
          <img src={this.props.isOpen ? leftArrow : rightArrow} alt="arrow" />
        </button>
      </div>
    );
  }
}

export default SideBar;
