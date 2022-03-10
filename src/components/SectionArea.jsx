import { Component } from "react"
import { Row } from "react-bootstrap"
import SingleMovie from "./SingleMovie"

class SectionArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      id: undefined,
      selected: this.props.comments,
    }
  }

  changeId = (str) => {
    this.setState({ ...this.state, id: str })
  }

  componentDidMount = async () => {
    console.log(this.state.selected)
    this.setState({ ...this.state, movie: [] })
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.branding
    )
    let data = await response.json()
    this.setState({ movie: data.Search })
    this.props.function(this.state.id)
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, movie: [] })
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.branding
      )
      let data = await response.json()
      this.setState({ ...this.state, movie: data.Search })
    }
  }
  render() {
    return (
      <div
        className="container-fluid mb-4"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <h1 className="text-white section-title">{this.props.branding}</h1>
        <Row>
          {this.state.movie.map((movie) => (
            <SingleMovie
              key={movie.imdbID}
              onClick={(e) => this.props.function(this.state.id)}
              function={this.changeId}
              branding={movie}
            />
          ))}
        </Row>
      </div>
    )
  }
}

export default SectionArea
