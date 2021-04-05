import React, { Component } from "react";
import { Text, Box } from "theme-ui";

class SideMenu extends Component {
  render() {
    return (
      <Box className="side-menu" pt={4}>
        <Text
          sx={{
            fontSize: 2,
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => this.props.logOutUser()}
        >
          Logout
        </Text>
      </Box>
    );
  }
}

export default SideMenu;
