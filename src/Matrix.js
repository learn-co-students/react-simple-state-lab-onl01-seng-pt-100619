import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

function buildMatrix() {
  let matrix = []
  for (let i = 0; i < 10; i++) {
    let innerMatrix = []
    for (let j = 0; j < 10; j++) {
      innerMatrix.push('#F00')
    }
    matrix.push(innerMatrix);
  }
  return matrix;
}

Matrix.defaultProps = {
  values: buildMatrix()
}