import React, { Component } from "react";
import Cell from "./cell";

export default class Matrix extends Component {
  // constructor() {
  //   super();
  //   this.props.values = [];
  //   for (let x = 0; x < 10; x++) {
  //     this.props.values[x] = [];

  //     for (let y = 0; y < 10; y++) {

  //       this.props.values[x][y] = "#FFF";
  //     }
  //   }
  // }
  genRow = (vals) => {
    console.log(vals);
    return vals.map((val) => vals.map((val) => <Cell value={val} />)); // replace me and render a cell component instead!
  };

  genMatrix = () => {
    return this.props.values.map((rowVals) => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: [
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
    [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ],
  ],
};
