import { Component } from "react"
import { Row } from "react-bootstrap"
import SingleMovie from "./SingleMovie"

class SectionArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      id: undefined,
    }
  }

  changeId = (str) => {
    this.setState({ ...this.state, id: str })
  }

  componentDidMount = async () => {
    this.setState({ ...this.state, movie: [] })
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.title
    )
    let data = await response.json()
    this.setState({ movie: data.Search })
    this.props.function(this.state.id)
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, movie: [], selected: !prevState })
      console.log(this.state)

      let response = await fetch(
        "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.title
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
        <h1 className="text-white section-title">{this.props.title}</h1>
        <Row>
          {this.state.movie.map((movie) => (
            <SingleMovie
              key={movie.imdbID}
              onClick={() => {
                this.setState({ ...this.state, selected: true })
                this.props.function(this.state.id)
              }}
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
