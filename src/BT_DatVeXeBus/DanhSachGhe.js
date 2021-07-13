import React, { Component } from "react";
import Ghe from "./Ghe";

class DanhSachGhe extends Component {
  render() {
    return (
      <div>
        <div className="border bg-light">Tài xế</div>
        <div className="container my-3">
            <Ghe dsGhe={this.props.danhSachGhe} gheDat={this.props.gheDat} dsGheChon={this.props.dsGheDat}/>
        </div>
      </div>
    );
  }
}

export default DanhSachGhe;
