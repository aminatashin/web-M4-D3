import "bootstrap/dist/css/bootstrap.min.css";
// import { Alert } from "react-bootstrap";
import './App.css';

import MyBadge from "./component/MyBadge";

import WarningSign from "./component/WarningSign";
import SingleBook from "./component/Romance";
import book from "../src/books/book.json"
// import BookLists from "./component/BookLists";


function App() {
  return (
    <div className="App">
      <WarningSign paragraphContent='This is An Alert'/>
      <MyBadge badgeStyle={"success"} textInside="Strive"/>
      <SingleBook books2={book[0]}/>
     {/* <BookLists books={book}/> */}
    </div>
  );
}

export default App;
