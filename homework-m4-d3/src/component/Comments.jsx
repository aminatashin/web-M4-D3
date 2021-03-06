// import { Component } from "react";
// import { Component } from "react";


import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";


class CommentBook extends Component{
state={
    com:[],
}

componentDidMount = async()=>{
    try {
        let res= await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.select,{
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4Y2NhMDRlYTdiMTAwMTVkMDY3ZTkiLCJpYXQiOjE2NDc1MjQwMDEsImV4cCI6MTY0ODczMzYwMX0.Y6lPGagi19Quc7j2ZsRMJA5QYvsuqbHOJkfoXYVCkwY"
                }
        })
        console.log(res)
        if (res.ok){
            let data = await res.json()
           
            this.setState({
              com:data,
            })
        }
        
    } catch (error) {
        console.log(error)
        
    }
 

    }

render(){



    return (
     <>
       
   <CommentList commentShow={this.state.com}/>
   <AddComment/>

   </>
    )
    
}
}  
  
  


export default CommentBook;
