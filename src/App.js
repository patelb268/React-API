import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Buy from "./Buy";
import PastOrders from "./PastOrders";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>

          <Route path="/buy/" element={<Buy />}>
            
          </Route>

          <Route path="/pastOrders/" element={<PastOrders />}>
            
          </Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
