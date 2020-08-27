import React, { Component } from "react";

import SideBar from "./SideBar/SideBar";
import Content from "../Content/Content";

class SideDrawer extends Component {
  state = {
    sidebarOpen: false
  };
  handleViewSidebar = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

  render() {
    return (
      <div>
        <SideBar
          isOpen={this.state.sidebarOpen}
          toggleSidebar={this.handleViewSidebar}
        />
        <Content isOpen={this.state.sidebarOpen} />
      </div>
    );
  }
}

export default SideDrawer;
