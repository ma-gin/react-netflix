import { Button, ListGroup, Row, Col } from "react-bootstrap"
import { Component } from "react"

const baseURL = "https://striveschool-api.herokuapp.com/api/comments/"

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
    let httpFetch = baseURL + this.props.branding5
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
  handleAdd = (id) => {
    console.log(id)
  } //how to add input field onClick
  handleEdit = (id) => {
    console.log(id)
  }

  handleDelete = async (str) => {
    let httpFetch = baseURL + str
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
                  <Button
                    className="my-2"
                    variant="light"
                    onClick={() => this.handleAdd(comment._id)}>
                    Add
                  </Button>
                  <Button
                    className="my-2 mx-2"
                    variant="dark"
                    onClick={() => this.handleEdit(comment._id)}>
                    Edit
                  </Button>
                  <Button
                    className="my-2"
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
