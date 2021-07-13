import React, { Component } from "react";

class DanhSachGheDat extends Component {
  renderHTML = () => {
    return this.props.dsGheDat.map((item) => {
      return (
        <div >
          <span>
            Ghế: {item.TenGhe} ${item.Gia} 
          </span>
          <button className="btn btn-link mx-3" onClick={() => this.props.huyGhe(item)}> [Hủy]</button>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h5>Danh sách ghế đã đặt ({this.props.soLuongGhe})</h5>
        {this.renderHTML()}
      </div>
    );
  }
}

export default DanhSachGheDat;
