import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class SectionArea extends Component {
  state = {
    name: this.props.branding,
    movie:[],
  };

  componentDidMount = async () => {
    this.setState({ ...this.state,movie: [] });
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=660268d7&s=" + this.state.name
    );
    let data = await response.json();
    console.log(data.Search);
    this.setState({ ...this.state, movie: data.Search });
    console.log('im the state' + this.state.movie[0].Title)
  };
  render() {
    return (
      <div
        className="container-fluid mb-4"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
      >
        <h1>{this.props.branding}</h1>
        <Row>
        
{this.state.movie.filter((movie, idx) => idx < 6).map(movie => (

<SingleMovie branding={movie.Poster}/>
)
  )}
          
        </Row>
      </div>
    );
  }
}

export default SectionArea;
