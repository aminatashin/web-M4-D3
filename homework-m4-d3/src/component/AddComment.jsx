import { Component } from "react"
import {Form} from "react-bootstrap"



class AddComment extends Component{
    state={
        comments:{ 
            comment: "",
        }

    }

      
    handleChange=(update,value)=>{
        this.setState({
            comments:{
                ...this.state.comments,
                [update]: value,
            }
        })

    }
   handleSubmit = async(e)=>{
    e.preventDefault();
       try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/comments/",{
            method:"POST",
            body: JSON.stringify(this.state.comments),
            headers: {
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4Y2NhMDRlYTdiMTAwMTVkMDY3ZTkiLCJpYXQiOjE2NDc1MjQwMDEsImV4cCI6MTY0ODczMzYwMX0.Y6lPGagi19Quc7j2ZsRMJA5QYvsuqbHOJkfoXYVCkwY"
             },
             "Content-Type": "application/json",
        })
        if(res.ok){
            alert("success")
        }
       } catch (error) {
           console.log(error)
           
       }
       
   }


    render(){
        return(
          <Form onSubmit={this.handleSubmit()}>
  <Form.Group >
    <Form.Label>Add Comments</Form.Label>
    <Form.Control type="text" placeholder="Comments" value={this.state.comments.comment} 
    onChange={(e)=> this.handleChange("comment", e.target.value)}
    />
    
  </Form.Group>
  </Form>

        )
    }
}
export default AddComment