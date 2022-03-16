import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";

const SingleBook = (props) => (


      <Col md={6}>
        <Card>
          <Card.Img
            variant="top"
            src="https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg"
          />
          <Card.Body>
            <Card.Title> {props.title} </Card.Title>
            <Card.Text>{props.category}</Card.Text>
            <Button variant="primary">{props.price}</Button>
          </Card.Body>
        </Card>
      </Col>

  
);
export default SingleBook;
