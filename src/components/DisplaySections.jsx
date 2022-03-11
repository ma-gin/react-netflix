import { Component } from "react"
import SectionArea from "./SectionArea"
import CommentArea from "./CommentArea"
// import MainDisplay from "./MainDisplay"

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
    this.setState(() => ({
      ...this.state,
      id: string,
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
        <CommentArea comment={this.state.id} />
        {this.state.title.length > 2 && this.state.title.length < 50 && (
          <SectionArea
            function={this.changeDisplayId}
            title={this.state.title}
          />
        )}
        {this.state.title.length < 2 && (
          <SectionArea
            function={this.changeDisplayId}
            title="Batman"
            comments={this.state.selected}
          />
        )}
        {this.state.title.length < 2 && (
          <SectionArea
            function={this.changeDisplayId}
            title="Superman"
            comments={this.state.selected}
          />
        )}
        {this.state.title.length < 2 && (
          <SectionArea
            function={this.changeDisplayId}
            title="Iron Man"
            comments={this.state.selected}
          />
        )}
        {this.state.title.length < 2 && (
          <SectionArea
            function={this.changeDisplayId}
            title="Avengers"
            comments={this.state.selected}
          />
        )}

        {/* <MainDisplay /> */}
      </>
    )
  }
}

export default DisplaySections
