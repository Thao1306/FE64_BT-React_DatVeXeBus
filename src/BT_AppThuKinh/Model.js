import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux"

class Model extends Component {
  render() {
      const {url, name, desc} = this.props.selectedGlass
    return (
      <div className="contain" style={{ position: "relative" }}>
        <div
          className="model"
          style={{
            background: "url(./glassesImage/model.jpg)",
          }}
        ></div>
        <div className="glasses">
          <img src={url} className="w-75" />
        </div>

        <p className="detail" style={{ backgroundColor: "#ffa5006e" }}>
          <h5>{name}</h5>
          <p>{desc}</p>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        selectedGlass: state.GlassesReducer.selectedGlass
    }

}

export default connect(mapStateToProps)(Model);
