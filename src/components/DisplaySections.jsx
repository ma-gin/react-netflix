import { Component } from "react"
import SectionArea from "./SectionArea"
import CommentArea from "./CommentArea"

class DisplaySections extends Component {
  state = {
    title: "",
    id: undefined,
    selected: false,
  }

  handleSearch = async (str) => {
    this.setState({ ...this.state, title: str })
  }

  changeDisplayId = (string) => {
    this.setState((prevState) => ({
      ...this.state,
      id: string,
      selected: !prevState.selected,
    }))
  }

  render() {
    return (
      <>
        <input
          type="text"
          className="my-4 mx-auto"
          style={{
            width: "30vw",
            minWidth: "250px",
            display: "block",
            padding: "0.3rem 1rem",
          }}
          placeholder="search your favorite movies"
          onChange={(event) => this.handleSearch(event.target.value)}
        />
        {this.state.selected && <CommentArea branding2={this.state.id} />}
        {/* {this.state.title.length > 2 && this.state.title.length < 50 && (
          <SectionArea
            function={this.changeDisplayId}
            branding={this.state.title}
          />
        )} */}

        {this.state.title.length < 4 && (
          <SectionArea
            function={this.changeDisplayId}
            branding="Batman"
            comments={this.state.selected}
          />
        )}

        {this.state.title.length < 4 && (
          <SectionArea
            function={this.changeDisplayId}
            branding="Superman"
            comments={this.state.selected}
          />
        )}
        {this.state.title.length < 4 && (
          <SectionArea
            function={this.changeDisplayId}
            branding="Iron Man"
            comments={this.state.selected}
          />
        )}
        {this.state.title.length < 4 && (
          <SectionArea
            function={this.changeDisplayId}
            branding="Avengers"
            comments={this.state.selected}
          />
        )}
      </>
    )
  }
}

export default DisplaySections
