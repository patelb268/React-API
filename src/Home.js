import React from "react";
import welcome from "./images/heading.png";
import "./App.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "real",
    };
  }

  ChangeTheme = () => {
    if (this.state.theme === "cartoon") {
      this.setState({
        theme: "real",
      });
    } else {
      this.setState({
        theme: "cartoon",
      });
    }
  };

  SetValuesOfLocalStorage = () => {
    if (
      localStorage.getItem("name") === null ||
      localStorage.getItem("salad") === null ||
      localStorage.getItem("cheese") === null ||
      localStorage.getItem("cutlets") === null
    ) {
      var NAME = [
        "Parva Patel",
        "Eathan Long",
        "Madeeha Alvarado",
        "Usmaan Barber",
        "Traci Daniel",
        "Parva Patel",
        "Tahmina Gould",
        "Parva Patel",
        "Parva Patel",
        "Anaya Orozco",
        "Menna Contreras",
        "Parva Patel",
        "Hana Sanchez",
        "Parva Patel",
        "Quinn Brennan",
        "Mamie Shea",
        "Anaya Orozco",
        "Anaya Orozco",
        "Usmaan Barber",
        "Traci Daniel",
        "Usmaan Barber",
        "Traci Daniel",
        "Eathan Long",
        "Madeeha Alvarado",
        "Usmaan Barber",
        "Quinn Brennan",
        "Mamie Shea",
        "Anaya Orozco",
        "Traci Daniel",
        "Tahmina Gould",
        "Anaya Orozco",
        "Menna Contreras",
        "Hana Sanchez",
        "Quinn Brennan",
        "Traci Daniel",
        "Tahmina Gould",
        "Anaya Orozco",
        "Menna Contreras",
        "Hana Sanchez",
        "Quinn Brennan",
      ];
      var SALAD = [
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "false",
        "false",
        "false",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "false",
        "false",
        "true",
        "true",
        "true",
        "false",
        "false",
        "false",
        "true",
        "true",
        "false",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "false",
        "true",
        "true",
      ];
      var CHEESE = [
        "3",
        "4",
        "1",
        "2",
        "3",
        "1",
        "2",
        "4",
        "5",
        "3",
        "5",
        "6",
        "4",
        "5",
        "5",
        "3",
        "8",
        "9",
        "4",
        "5",
        "3",
        "4",
        "5",
        "4",
        "2",
        "6",
        "5",
        "2",
        "2",
        "4",
        "5",
        "7",
        "7",
        "4",
        "2",
        "3",
        "9",
        "1",
        "10",
        "1",
      ];
      var CUTLETS = [
        "1",
        "2",
        "3",
        "1",
        "1",
        "2",
        "2",
        "1",
        "3",
        "2",
        "3",
        "4",
        "3",
        "2",
        "3",
        "1",
        "3",
        "4",
        "2",
        "3",
        "2",
        "3",
        "4",
        "2",
        "3",
        "2",
        "4",
        "2",
        "1",
        "3",
        "4",
        "3",
        "2",
        "3",
        "2",
        "1",
        "3",
        "1",
        "2",
        "3",
      ];
      localStorage.setItem("name", JSON.stringify(NAME));
      localStorage.setItem("salad", JSON.stringify(SALAD));
      localStorage.setItem("cheese", JSON.stringify(CHEESE));
      localStorage.setItem("cutlets", JSON.stringify(CUTLETS));
    }
  };

  componentWillMount = () => {
    this.SetValuesOfLocalStorage();
  };

  render() {
    return (
      <div className="App">
        <div className="ChangeThemeButton" onClick={this.ChangeTheme}>
          Change theme
        </div>
        <img className="welcome" src={welcome} alt="The Burger Bank" />
        {this.state.theme === "cartoon" ? (
          <div>
            <div className="burger_background1"></div>
            <div
              className="UIbutton1 buy"
              onClick={(event) =>
                (window.location.href = "/TheBurgerBank/#/buy/")
              }
            >
              <span>Grab a Burger</span>
            </div>
            <div
              className="UIbutton1 past_orders"
              onClick={(event) =>
                (window.location.href = "/TheBurgerBank/#/pastOrders/")
              }
            >
              <span>Past Orders</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="burger_background2"></div>
            <div
              className="UIbutton2 buy2"
              onClick={(event) =>
                (window.location.href = "/TheBurgerBank/#/buy/")
              }
            >
              <span>Grab a Burger</span>
            </div>
            <div
              className="UIbutton2 past_orders2"
              onClick={(event) =>
                (window.location.href = "/TheBurgerBank/#/pastOrders/")
              }
            >
              <span>Past Orders</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
