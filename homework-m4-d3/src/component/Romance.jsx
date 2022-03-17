import React from "react";
import { Container, Col, Row,Card } from "react-bootstrap";
import {Component} from "react"
import CommentBook from "./Comments";

class SingleBook extends Component {
  state = {
    selectBook: false,
    
  };
  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col  md={6}>
            <Card  onClick={()=> this.setState({selectBook:!this.state.selectBook})}> 
           
              <Card.Img variant="top" src={this.props.books.img}  />
              <Card.Body>
                <Card.Title>{this.props.books.title}</Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
        </Row>
          
        <Col>
       { 
       this.state.selectBook && <CommentBook select={this.props.books.asin}/>
        } 
         </Col>
           
      </Container>
    );
  }
}

export default SingleBook;
