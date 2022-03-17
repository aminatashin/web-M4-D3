import "bootstrap/dist/css/bootstrap.min.css";
// import { Alert } from "react-bootstrap";
import './App.css';

// import MyBadge from "./component/MyBadge";

// import WarningSign from "./component/WarningSign";
import SingleBook from "./component/Romance";
import book from "../src/books/book.json"
import BookList from "./component/BookList";
import CommentList from "./component/CommentList";



function App() {
  return (
    <div className="App">
      {/* <WarningSign paragraphContent='This is An Alert'/> */}
      {/* <MyBadge badgeStyle={"success"} textInside="Strive"/> */}
      <SingleBook books={book[0]}/>
      <BookList data={book}/>
      <CommentList />
    
    </div>
  );
}

export default App;
