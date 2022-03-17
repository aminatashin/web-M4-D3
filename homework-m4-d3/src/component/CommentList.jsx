import { ListGroup } from "react-bootstrap";
// import SingleComment from "./SingleComment";

const CommentList = ({ commentShow }) => (
  <ListGroup>
   {commentShow.map(comment=>(
    <ListGroup.Item>{comment.comment}</ListGroup.Item>
   ))}
 
  </ListGroup>
);
export default CommentList;
