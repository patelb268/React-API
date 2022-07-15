import React from "react";
import "./App.css";

export default class Buy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      nameChange: "",
      salad: true,
      cheeseSlices: 0,
      cutlets: 1,
    };
  }

  SubmitName = () => {
    this.setState({
      name: this.state.nameChange,
      nameChange: "",
    });
  };

  nameChange = (event) => {
    this.setState({
      nameChange: event.target.value,
    });
  };

  SaladToggle = () => {
    this.setState({
      salad: !this.state.salad,
    });
  };

  CheeseSliceChange = (event) => {
    this.setState({
      cheeseSlices: event.target.value,
    });
  };

  CutletChange = (event) => {
    this.setState({
      cutlets: event.target.value,
    });
  };

  AddOrder = () => {
    if (this.state.name) {
      var NAME = JSON.parse(localStorage.getItem("name"));
      NAME.push(this.state.name);
      var SALAD = JSON.parse(localStorage.getItem("salad"));
      SALAD.push(`${this.state.salad}`);
      var CHEESE = JSON.parse(localStorage.getItem("cheese"));
      CHEESE.push(`${this.state.cheeseSlices}`);
      var CUTLETS = JSON.parse(localStorage.getItem("cutlets"));
      CUTLETS.push(`${this.state.cutlets}`);
      localStorage.setItem("name", JSON.stringify(NAME));
      localStorage.setItem("salad", JSON.stringify(SALAD));
      localStorage.setItem("cheese", JSON.stringify(CHEESE));
      localStorage.setItem("cutlets", JSON.stringify(CUTLETS));
      window.location.href = "/TheBurgerBank/#/";
    } else {
      alert("Please enter your name to place the order.");
    }
  };

  render() {
    return (
      <div className="OrderBackground">
        <div className="Order_back_image"></div>

        <div
          className="BackToHome"
          onClick={(event) => (window.location.href = "/TheBurgerBank/#/")}
        >
          Home
        </div>

        {!this.state.name ? (
          <div className="EnterName">
            Please enter your name:
            <input
              className="EnterNameArea"
              type="text"
              placeholder="Full Name"
              value={this.state.name}
              onChange={(event) => this.nameChange(event)}
            />
            <input
              className="NameSubmit"
              type="submit"
              value="Submit"
              onClick={this.SubmitName}
            />
          </div>
        ) : (
          <div className="EnteredName">Welcome, {this.state.name}.</div>
        )}
        <div className="Instruction">
          Here is the cost of the ingredients. Please specify the quantity of
          ingredients wherever necessary.
        </div>

        <h1 id="title">Invoice details</h1>
        <table id="ingredients">
          <tbody>
            <tr>
              <td>Ingredients</td>
              <td>Quantity</td>
              <td>Price per piece</td>
              <td>Amount</td>
            </tr>

            <tr>
              <td>Bun</td>
              <td>2</td>
              <td>Rs. 5</td>
              <td style={{ fontWeight: 800 }}>Rs. 10</td>
            </tr>

            <tr>
              <td>Salad</td>
              <td>
                <input
                  className="Check"
                  type="checkbox"
                  checked={this.state.salad}
                  onClick={this.SaladToggle}
                />
              </td>
              <td>Rs. 5</td>
              <td style={{ fontWeight: 800 }}>
                Rs. {this.state.salad ? "5" : "0"}
              </td>
            </tr>

            <tr>
              <td>Cheese Slices</td>
              <td>
                <input
                  className="NumberSpecify"
                  type="number"
                  placeholder="0"
                  onChange={(event) => this.CheeseSliceChange(event)}
                />
              </td>
              <td>Rs. 1</td>
              <td style={{ fontWeight: 800 }}>Rs. {this.state.cheeseSlices}</td>
            </tr>

            <tr style={{ borderBottom: "7px solid #000" }}>
              <td>Cutlets</td>
              <td>
                <input
                  className="NumberSpecify"
                  type="number"
                  placeholder="1"
                  onChange={(event) => this.CutletChange(event)}
                />
              </td>
              <td>Rs. 2</td>
              <td style={{ fontWeight: 800 }}>Rs. {this.state.cutlets * 2}</td>
            </tr>

            <tr style={{ borderBottom: "7px solid #000" }}>
              <td
                className="TotalAmount"
                style={{ textAlign: "right" }}
                colSpan="3"
              >
                Total Amount:{" "}
              </td>
              <td className="TotalAmount" style={{ fontWeight: 800 }}>
                Rs.{" "}
                {10 +
                  Number(this.state.salad ? 5 : 0) +
                  Number(this.state.cheeseSlices) +
                  Number(2 * this.state.cutlets)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="PlaceOrder" onClick={this.AddOrder}>
          Place Order
        </div>
      </div>
    );
  }
}
