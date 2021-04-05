import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Label, Input, Button, Box } from "theme-ui";
import { connect } from "react-redux";
import { loginUser } from "../actions/user";
import { users } from "../util";

class Login extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleTextFields(key, value) {
    this.setState({
      [key]: value,
    });
  }

  async handleSubmit() {
    const { userName, password } = await this.state;
    const user = await users.filter((user) => {
      return user.username === userName && user.password === password;
    });
    if (user.length) {
      await this.props.loginUser(user[0]);
      this.props.history.push("/dashboard");
    } else {
      alert("Please login with correct credentials");
    }
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6}>
              <Box mt={5}>
                <Label>Username</Label>
                <Input
                  mb={3}
                  onChange={(e) =>
                    this.handleTextFields("userName", e.target.value)
                  }
                />
                <Label>Password</Label>
                <Input
                  type="password"
                  mb={3}
                  onChange={(e) =>
                    this.handleTextFields("password", e.target.value)
                  }
                />
                <Button
                  sx={{ background: "blue" }}
                  onClick={() => this.handleSubmit()}
                >
                  Submit
                </Button>
              </Box>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
  }),
  {
    loginUser,
  }
)(Login);
