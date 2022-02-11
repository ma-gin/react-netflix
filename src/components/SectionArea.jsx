import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class SectionArea extends Component {
  state = {
    movie:[],
  };

  componentDidMount = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=660268d7&s=" + this.props.branding
    );
    let data = await response.json();
    console.log(data.Search);
    this.setState({ movie: data.Search });
    console.log('im the state' + this.state.movie[0].Title)
  };
  render() {
    return (
      <div
        className="container-fluid mb-4"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
      >
        <h1>Title</h1>
        <Row>
        
{this.state.movie.map(movie => (

<SingleMovie branding={movie.Poster}/>

)
  )}
          
        </Row>
      </div>
    );
  }
}

export default SectionArea;
