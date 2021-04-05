import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import { Box } from "theme-ui";
import { logOutUser } from "../actions/user";
import { addPayment } from "../actions/payment";
import PaymentHistory from "../components/paymentHistory";
import Table from "../components/table";
import SideMenu from "../components/sidemenu";

class Dashboard extends Component {
  state = {
    payments: [],
  };

  componentDidMount() {
    const { user } = this.props;
    if (user === null) {
      this.props.history.push("/");
    } else {
      this.setState({
        payments: this.props.payments,
      });
    }
  }

  async handleLogout() {
    await this.props.logOutUser();
    await this.props.history.push("/");
  }

  async handleAddPayment(data) {
    await this.props.addPayment(data);
    await this.setState({
      payments: this.props.payments,
    });
  }

  render() {
    return (
      <Box>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2}>
            <SideMenu
              logOutUser={() => this.handleLogout()}
              width={this.state.width}
            />
          </Col>
          <Col xs={10} sm={7} md={8} lg={8}>
            <Table
              totalPayments={this.state.payments}
              user={this.props.user}
              addPayment={(data) => this.handleAddPayment(data)}
            />
          </Col>
          <Col xs={12} sm={3} md={2} lg={2}>
            <PaymentHistory payments={this.state.payments} />
          </Col>
        </Row>
      </Box>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
    payments: state.payments,
  }),
  { logOutUser, addPayment }
)(Dashboard);
