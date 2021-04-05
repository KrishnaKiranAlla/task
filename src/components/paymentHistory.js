import React, { Component } from "react";
import { Box, Text } from "theme-ui";
import PaymentTile from "./paymentTile";

class PaymentHistory extends Component {
  render() {
    return (
      <div className="payment-container">
        <Box p={3}>
          <Text sx={{ fontSize: 4 }}>Payment History</Text>
        </Box>
        {this.props.payments?.map((payment) => {
          const { bill, category, title, id } = payment;
          return (
            <PaymentTile
              bill={bill}
              category={category}
              title={title}
              key={id}
            />
          );
        })}
      </div>
    );
  }
}

export default PaymentHistory;
