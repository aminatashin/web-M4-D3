import { Container, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import React, { Component } from "react";
import book from "../books/book.json";
import SingleBook from "./SingleBook";

class BookLists extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          {book.map((list) => (
            <SingleBook title={list.title} category={list.category} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookLists;
