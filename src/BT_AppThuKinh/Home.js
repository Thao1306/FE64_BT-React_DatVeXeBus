import React, { Component } from "react";
import ListGlasses from "./ListGlasses";
import Model from "./Model";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <img
          src="./glassesImage/background.jpg"
          style={{
            backgroundSize: "cover",
            opacity: 0.5,
            height: "800px",
            width: "100%",
          }}
        />
        <div className="bg">
          <h1 style={{ backgroundColor: "rgb(52 58 64 / 84%)", color: "white", lineHeight: 2}}>TRY GLASSES APP ONLINE</h1>
          <Model />
          <ListGlasses />
        </div>
      </div>
    );
  }
}

export default Home;
