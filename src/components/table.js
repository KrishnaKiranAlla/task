import React, { Component } from "react";
import { Input, Box, Button, Text } from "theme-ui";

class Table extends Component {
  state = {
    bill: "",
    category: "",
    title: "",
    type: "",
    id: "",
  };

  async handleAdd() {
    const { type } = this.state;
    if (type !== "new")
      await this.setState({
        id: Date.now(),
        type: "new",
      });
  }

  async handleCancel() {
    await this.setState({
      id: "",
      bill: "",
      category: "",
      title: "",
      type: "",
    });
  }

  async handleValues(e, key) {
    await this.setState({
      [key]: e.target.value,
    });
  }

  async handleAddPayment(data) {
    const { bill, category, title } = await this.state;
    if (bill !== "" && category !== "" && title !== "") {
      await this.setState({
        type: "",
      });
      await this.props.addPayment(data);
      await this.setState({
        bill: "",
        category: "",
        title: "",
        id: "",
      });
    } else {
      alert("Enter all details");
    }
  }

  renderAllPayments(totalPayment) {
    const { bill, category, title, id } = this.state;
    return (
      totalPayment?.length > 0 &&
      totalPayment?.map((payment) => {
        return (
          <tr key={payment?.id}>
            <td>
              {payment?.id === id ? (
                <Input
                  value={title}
                  onChange={(e) => this.handleValues(e, "title")}
                />
              ) : (
                payment?.title
              )}
            </td>
            <td>
              {payment?.id === id ? (
                <Input
                  value={category}
                  onChange={(e) => this.handleValues(e, "category")}
                />
              ) : (
                payment?.category
              )}
            </td>
            <td>
              {payment?.id === id ? (
                <Input
                  value={bill}
                  onChange={(e) => this.handleValues(e, "bill")}
                />
              ) : (
                payment?.bill
              )}
            </td>
            <td>
              {payment?.id !== id ? (
                this.props.user?.role === "admin" && (
                  <Button
                    onClick={() => {
                      this.setState({
                        bill: payment?.bill,
                        title: payment?.title,
                        category: payment?.category,
                        id: payment?.id,
                      });
                    }}
                    sx={{ background: "blue" }}
                  >
                    Edit
                  </Button>
                )
              ) : (
                <Box>
                  <Text
                    sx={{
                      fontSize: 4,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => this.handleCancel()}
                  >
                    X
                  </Text>
                  <Text
                    pl={3}
                    sx={{
                      fontSize: 4,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      this.handleAddPayment({
                        bill,
                        category,
                        id,
                        title,
                      });
                    }}
                  >
                    &#10003;
                  </Text>
                </Box>
              )}
            </td>
          </tr>
        );
      })
    );
  }

  render() {
    const { bill, category, title, id, type } = this.state;
    const totalPayment = this.props.totalPayments;
    return (
      <Box>
        <Box p={3}>
          {this.props.user?.role === "admin" && (
            <Button
              sx={{ background: "blue" }}
              onClick={() => this.handleAdd()}
            >
              Add
            </Button>
          )}
        </Box>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {type === "new" && (
              <tr key={id}>
                <td>
                  <Input
                    value={title}
                    onChange={(e) => this.handleValues(e, "title")}
                  />
                </td>
                <td>
                  <Input
                    value={category}
                    onChange={(e) => this.handleValues(e, "category")}
                  />
                </td>
                <td>
                  <Input
                    value={bill}
                    onChange={(e) => this.handleValues(e, "bill")}
                  />
                </td>
                <td>
                  <Text
                    sx={{
                      fontSize: 4,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => this.handleCancel()}
                  >
                    X
                  </Text>
                  <Text
                    pl={3}
                    sx={{
                      fontSize: 4,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      this.handleAddPayment({ bill, category, id, title })
                    }
                  >
                    &#10003;
                  </Text>
                </td>
              </tr>
            )}
            {this.renderAllPayments(totalPayment)}
          </tbody>
        </table>
      </Box>
    );
  }
}

export default Table;
