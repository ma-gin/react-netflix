import { Button, ListGroup, Row, Col } from "react-bootstrap"
import { Component } from "react"

class SingleComment extends Component {
  state = {
    selected: false,
    comments: [],
    id: "",
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      selected: !this.state.selected,
    })
  }

  componentDidMount = async () => {
    let httpFetch =
      "https://striveschool-api.herokuapp.com/api/comments/" +
      this.props.branding5
    try {
      let response = await fetch(httpFetch, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      if (response.ok) {
        let data = await response.json()
        this.setState({
          ...this.state.selected,
          comments: data,
        })
      } else {
        console.log("server error")
      }
    } catch (error) {
      console.log(error)
    }
  }
  // handleAdd = () => {}
  // handleEdit = () => {}

  handleDelete = async (str) => {
    let httpFetch = "https://striveschool-api.herokuapp.com/api/comments/" + str
    fetch(httpFetch, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    }).then(() => {
      alert("Delete successful")
      console.log("Delete successful")
    })
  }

  render() {
    return (
      <div style={{ color: "black !important" }}>
        <div onClick={this.handleClick}>
          <ListGroup style={{ width: "100%", color: "black !important" }}>
            <Row>
              {this.state.comments.map((comment) => (
                <Col key={comment._id} xs={12} md={6} lg={4} xl={3}>
                  <ListGroup.Item
                    style={{ fontSize: "14px", color: "black !important" }}>
                    {comment.comment}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ fontSize: "14px", color: "black !important" }}>
                    {comment.rate}
                  </ListGroup.Item>
                  {/* <Button
                    className="mt-3"
                    variant="light"
                    onClick={() => this.handleAdd(comment._id)}>
                    Add
                  </Button>
                  <Button
                    className="mt-3 mx-4"
                    variant="dark"
                    onClick={() => this.handleEdit(comment._id)}>
                    Edit
                  </Button> */}
                  <Button
                    className="mt-3"
                    variant="danger"
                    onClick={() => this.handleDelete(comment._id)}>
                    Delete
                  </Button>
                </Col>
              ))}
            </Row>
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default SingleComment
