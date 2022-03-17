import { ListGroup } from "react-bootstrap";

const CommentList = (props)=>(
    <ListGroup>
  <ListGroup.Item>{props.commnetShow.comment}</ListGroup.Item>
  
</ListGroup>
)
export default CommentList