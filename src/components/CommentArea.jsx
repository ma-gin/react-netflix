import { Card, Col } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentArea = (props) => (
  <Col md={12}>
    <Card
      className="mx-auto"
      style={{
        zIndex: "150",
        width: "60%",
        textAlign: "center",
        marginBottom: "20px",
        backgroundColor: "gray",
      }}
      key={props.branding2}>
      <Card.Header>Comments</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <SingleComment branding5={props.branding2} />
        </blockquote>
      </Card.Body>
    </Card>
  </Col>
)

export default CommentArea
