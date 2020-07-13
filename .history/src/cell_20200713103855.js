import Matrix from './matrix'

class Cell {

  render() {
    return (
      <div id="cell">
        {this.genMatrix()}
      </div>
    )
  }
}
