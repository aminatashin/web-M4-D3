import {  Col, Card, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleBook = (props) => (


      <Col md={6}>
        <Card>
          <Card.Img
            variant="top"
            src={props.books.img}
          />
          <Card.Body>
            <Card.Title> {props.books2.title} </Card.Title>
            <Card.Text>{props.books2.category}</Card.Text>
            <Button variant="primary">{props.books2.price}</Button>
          </Card.Body>
        </Card>
      </Col>

  
);
export default SingleBook;
