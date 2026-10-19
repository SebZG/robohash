import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox.jsx";
import CardList from "../components/CardList.jsx";
import Scroll from "../components/Scroll.jsx";
// import { robots } from "./robots.js";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: "",
  //   };
  // }
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  // componentDidMount() {
  //   // this.setState({ robots });
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((users) => {
  //       // console.log(users);
  //       this.setState({ robots: users });
  //     });
  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        // console.log(users);
        setRobots(users);
      });
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };
  
  // const { robots, searchField } = this.state;

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  return !robots.length ? (
    <h1 className="tc f1">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
