import React from "react";
import { Container, Col, Row,Card } from "react-bootstrap";
import {Component} from "react"
import CommentBook from "./Comments";

class SingleBook extends Component {
  state = {
    selectBook: null,
    
  };
  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            <Card >
              <Card.Img variant="top" src={this.props.books.img} onClick={()=> this.setState({selectBook:this.props.books})} />
              <Card.Body>
                <Card.Title>{this.props.books.title}</Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
        </Row>
          
        <Col>
         <CommentBook select={this.state.selectBook} /> 
         </Col>
           
      </Container>
    );
  }
}

export default SingleBook;
