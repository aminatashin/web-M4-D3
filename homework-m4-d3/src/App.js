import "bootstrap/dist/css/bootstrap.min.css";
// import { Alert } from "react-bootstrap";
import './App.css';
import BookLists from "./component/BookLists";
import MyBadge from "./component/MyBadge";
import SingleBook from "./component/SingleBook";
import WarningSign from "./component/WarningSign";

function App() {
  return (
    <div className="App">
      <WarningSign paragraphContent='This is An Alert'/>
      <MyBadge badgeStyle={"success"} textInside="Strive"/>
      <SingleBook title="Title:A Reaper at the Gates (Ember Quartet, Book 3)" price='Price:12.6' category='Category:romance'/>
   <BookLists/>
    </div>
  );
}

export default App;
