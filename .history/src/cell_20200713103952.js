import Matrix from './matrix'

export default class Cell extends Matrix {

  render() {
    return (
      <div id="cell">
        {this.genMatrix()}
      </div>
    )
  }
}
