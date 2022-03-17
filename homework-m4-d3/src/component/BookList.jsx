import { Component } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

import SingleBook from "./Romance";


class BookList extends Component {
  state = {
    searchQuery: "",
   
  };

  render() {
    return (
      <>
      <Container>
        <Form>
         
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>search</Form.Label>
            <Form.Control
              type="text"
              placeholder="search the book"
              value={this.state.searchQuery}
              onChange={(e) =>
                this.setState({
                  searchQuery: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form>

        
          <Row>
            {this.props.data
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col md={6}>
                  <SingleBook books={b} />
                </Col>
              ))}

               

          </Row>
        
             
        
        </Container>
      </>
    );
  }
}
export default BookList;
