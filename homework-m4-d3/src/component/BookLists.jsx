import { Container, Col , Row } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./Romance";



const BookLists = (props) => (
    <Container>
        <Row>
            {props.books.map(b=>(
                <Col>
                 <SingleBook books2={b}/>
                </Col>
               
            ))}
        </Row>
    </Container>
)


export default BookLists;
