import { Card, Col } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentArea = ({ comment }) => (
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
      key={comment}>
      <Card.Header>Comments</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <SingleComment branding5={comment} />
        </blockquote>
      </Card.Body>
    </Card>
  </Col>
)

export default CommentArea
