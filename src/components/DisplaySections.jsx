import { Component } from "react"
import SectionArea from "./SectionArea"
import CommentArea from "./CommentArea"

class DisplaySections extends Component {
  state = {
    title: "",
    id: undefined,
  }

  handleSearch = async (str) => {
    this.setState({ ...this.state, title: "" })
    this.setState({ ...this.state, title: str })
  }

  changeDisplayId = (string) => {
    this.setState({ ...this.state, id: string })
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
            paddingInline: "1rem",
          }}
          placeholder="search your favorite movies"
          onChange={(event) => this.handleSearch(event.target.value)}
        />
        <CommentArea branding2={this.state.id} />
        {this.state.title.length > 3 && this.state.title.length < 50 && (
          <SectionArea
            function={this.changeDisplayId}
            branding={this.state.title}
          />
        )}

        {this.state.title.length < 4 && (
          <SectionArea function={this.changeDisplayId} branding="Batman" />
        )}

        {this.state.title.length < 4 && (
          <SectionArea function={this.changeDisplayId} branding="Superman" />
        )}
        {this.state.title.length < 4 && (
          <SectionArea function={this.changeDisplayId} branding="Iron Man" />
        )}
        {this.state.title.length < 4 && (
          <SectionArea function={this.changeDisplayId} branding="Avengers" />
        )}
      </>
    )
  }
}

export default DisplaySections
