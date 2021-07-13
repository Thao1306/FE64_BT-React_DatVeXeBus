import React, { Component } from "react";

class Ghe extends Component {
  checkBooking = (item) => {
    const checkIt = this.props.dsGheChon.find((it) => {
      return item.SoGhe === it.SoGhe;
    });
    if (checkIt) {
      return { width: 45, backgroundColor: "#28a745" };
    } else if(item.TrangThai) {
      return { width: 45 , backgroundColor: "red"};
    } else {
      return { width: 45 };
    }
  };
  checkTrangThai = (item) => {
    if (item.TrangThai) {
      return true;
    } else {
      return false;
    }
  };
  renderHTML = () => {
    const renderItem = this.props.dsGhe.map((item) => {
      return (
        <div className="col-2">
          <button
            className="btn btn-secondary mb-2"
            onClick={() => this.props.gheDat(item)}
            style={this.checkBooking(item)}
            disabled={this.checkTrangThai(item)}
          >
            {item.SoGhe}
          </button>
        </div>
      );
    });
    return renderItem;
  };
  render() {
    return <div className="row">{this.renderHTML()}</div>;
  }
}

export default Ghe;
