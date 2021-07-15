import React, { Component } from "react";
import { connect } from "react-redux";

class Item extends Component {
  renderGlasses = () => {
    return this.props.itemGlass.map((item) => {
      return (
        <img
          src={item.url}
          style={{ width: 100, marginRight: "5px" }}
          onClick={() => this.onClickGlass(item)}
        />
      );
    });
  };
  onClickGlass = (item) => {
    const action = {
      type: "GET_GLASS",
      payload: {
        url: item.url,
        name: item.name,
        desc: item.desc,
      },
    };
    this.props.dispatch(action);
  };
  render() {
    return <div>{this.renderGlasses()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    itemGlass: state.GlassesReducer.glasses,
  };
};
export default connect(mapStateToProps)(Item);
