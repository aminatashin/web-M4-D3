// import { Component } from "react";
import { Component } from "react";
import {  ListGroup } from "react-bootstrap";


class CommentBook extends Component {

state={

}
  render(){
      return( handleFetch = async ()=>{
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/0316438960",{
         headers: {
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4Y2NhMDRlYTdiMTAwMTVkMDY3ZTkiLCJpYXQiOjE2NDc1MjQwMDEsImV4cCI6MTY0ODczMzYwMX0.Y6lPGagi19Quc7j2ZsRMJA5QYvsuqbHOJkfoXYVCkwY"
             }
        })

        }
      )
    }
 
    

}



  
  


export default CommentBook;
