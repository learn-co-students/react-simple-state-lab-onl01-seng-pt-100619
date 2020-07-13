import Matrix from './matrix'

export default class Cell extends Component {

  render() {
    return (
      <div id="cell">
        {this.genMatrix()}
      </div>
    )
  }
}
