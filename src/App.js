import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";

class App extends Component {
  //1st run
  //allow to change state
  constructor() {
    //call the contructor of the component
    super();

    //instantiate the state
    //this object is json
    this.state = {
      monsters: [],
      searchString: "",
    };
    console.log("Constructor");
  }

  //3rd run
  //get the list of monster from API
  //life cycle method
  //mounting is the first time component get place onto the DOM
  //throughout the component's life
  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respond) => respond.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    console.log(e.target.value);
    const searchString = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  //2nd run
  //once componentDidMount call/props change this will re-render too
  render() {
    console.log("render");

    //destruct
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    //this give back a new array
    const filteredmonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredmonster} />
      </div>
    );
  }
}

export default App;
