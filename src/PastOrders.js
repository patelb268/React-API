import React from "react";
import "./App.css";

export default class PastOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      nameChange: "",
      SearchName: 0,
    };
  }

  ScrollToBottom = () => {
    console.log("Hello");
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  ToggleSearch = () => {
    if (this.state.SearchName === 0) {
      this.setState({
        SearchName: 1,
      });
    } else {
      this.setState({
        SearchName: 0,
      });
    }
  };

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

  viewPastOrders = () => {
    var NAME = JSON.parse(localStorage.getItem("name"));
    var SALAD = JSON.parse(localStorage.getItem("salad"));
    var CHEESE = JSON.parse(localStorage.getItem("cheese"));
    var CUTLETS = JSON.parse(localStorage.getItem("cutlets"));

    var outcome = [];
    var Total = 0;
    var sumTotal = 0;

    for (var i = 0; i < NAME.length; i++) {
      Total =
        10 +
        Number(SALAD[i] ? 5 : 0) +
        Number(CHEESE[i]) +
        Number(2 * CUTLETS[i]);
      outcome.push(
        <tr>
          <td>{NAME[i]}</td>
          <td>{SALAD[i] === "true" ? "Yes" : "No"}</td>
          <td>{CHEESE[i]}</td>
          <td>{CUTLETS[i]}</td>
          <td style={{ fontWeight: 800 }}>{Total}</td>
        </tr>
      );
      sumTotal += Total;
    }
    outcome.push(
      <tr
        style={{ borderBottom: "7px solid #000", borderTop: "7px solid #000" }}
      >
        <td className="TotalAmount" style={{ textAlign: "right" }} colSpan="4">
          Total earnings:{" "}
        </td>
        <td className="TotalAmount" style={{ fontWeight: 800 }}>
          {sumTotal}
        </td>
      </tr>
    );
    return outcome;
  };

  viewPastOrdersOfName = () => {
    var NAME = JSON.parse(localStorage.getItem("name"));
    var SALAD = JSON.parse(localStorage.getItem("salad"));
    var CHEESE = JSON.parse(localStorage.getItem("cheese"));
    var CUTLETS = JSON.parse(localStorage.getItem("cutlets"));

    var outcome = [];
    var Total = 0;
    var sumTotal = 0;

    var Check = 0;

    for (var i = 0; i < NAME.length; i++) {
      if (this.state.name === NAME[i]) {
        Check = 1;
        Total =
          10 +
          Number(SALAD[i] ? 5 : 0) +
          Number(CHEESE[i]) +
          Number(2 * CUTLETS[i]);
        outcome.push(
          <tr>
            <td>{NAME[i]}</td>
            <td>{SALAD[i] === "true" ? "Yes" : "No"}</td>
            <td>{CHEESE[i]}</td>
            <td>{CUTLETS[i]}</td>
            <td style={{ fontWeight: 800 }}>{Total}</td>
          </tr>
        );
        sumTotal += Total;
      }
    }
    outcome.push(
      <tr
        style={{ borderBottom: "7px solid #fff", borderTop: "7px solid #fff" }}
      >
        <td className="TotalAmount" style={{ textAlign: "right" }} colSpan="4">
          Total earnings:{" "}
        </td>
        <td className="TotalAmount" style={{ fontWeight: 800 }}>
          {sumTotal}
        </td>
      </tr>
    );

    if (Check === 0)
      return [
        <td className="NoResult" colSpan="5">
          No results found.
        </td>,
      ];
    else return outcome;
  };

  setNametoNull = () => {
    this.setState({
      name: null,
    });
  };

  render() {
    return (
      <div className="OrderBackground Past">
        <div className="Order_back_image2"></div>
        <div
          className="BackToHome"
          style={{ textAlign: "center" }}
          onClick={(event) => (window.location.href = "/TheBurgerBank/#/")}
        >
          Home
        </div>
        <div className="ListHeading">List of past orders</div>
        <div
          style={{
            postion: "absolute",
            width: "60%",
            marginLeft: "20%",
            height: "6px",
            backgroundColor: "black",
            borderRadius: "3px",
            marginTop: "10px",
          }}
        ></div>
        <div className="Display">
          <table id="ingredients1">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Salad</td>
                <td>Cheese Slices</td>
                <td>Cutlets</td>
                <td>Amount (in Rs.)</td>
              </tr>
              {this.viewPastOrders()}
            </tbody>
          </table>
        </div>

        <div
          className="Search"
          onClick={() => {
            this.ToggleSearch();
            this.ScrollToBottom();
          }}
        >
          Search by person name
        </div>

        {this.state.SearchName === 1 ? (
          <div
            className="EnterName"
            style={{ paddingTop: "20px", paddingBottom: "30px" }}
          >
            Enter the name:
            <input
              className="EnterNameArea"
              type="text"
              placeholder="Full Name"
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
          <div></div>
        )}

        {this.state.name ? (
          <div className="SearchByName">
            <div
              className="EnteredName"
              style={{ fontSize: "40px", paddingTop: "10px" }}
            >
              {this.state.name}
            </div>
            <div className="Display2">
              <table id="ingredients2">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Salad</td>
                    <td>Cheese Slices</td>
                    <td>Cutlets</td>
                    <td>Amount (in Rs.)</td>
                  </tr>
                  {this.viewPastOrdersOfName()}
                </tbody>
              </table>
            </div>
            <div
              className="NoResult"
              style={{ userSelect: "none" }}
              onClick={this.setNametoNull}
            >
              <span>Close</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
