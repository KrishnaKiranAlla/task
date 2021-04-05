import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Box } from "theme-ui";
import PropTypes from "prop-types";

class PaymentTile extends Component {
  static propTypes = {
    bill: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    bill: "123",
    category: "false",
    title: "payment type",
  };

  render() {
    const { bill, category, title } = this.props;
    return (
      <Box sx={{ border: "1px solid " }} m={2}>
        <Box p={2}>
          <Row between="xs">
            <Col>{title}</Col>
            <Col>{bill}</Col>
          </Row>
        </Box>
        <Box p={2}>
          <Row between="xs">
            <Col>{category}</Col>
            <Col>USD</Col>
          </Row>
        </Box>
      </Box>
    );
  }
}

export default PaymentTile;
