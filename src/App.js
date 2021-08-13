import React from "react";
import "./App.css";
import Event from "./components/Event";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      map: [
        { title: "Rakim" },
        { title: "Eminem" },
        { title: "Nas" },
        { title: "Biggie" },
        { title: "Pac" },
        { title: "NF" },
        { title: "Black thought" },
      ],
      value: "",
    };
  }
  add(e) {
    e.preventDefault();
    this.setState((state) => {
      const map = state.map.concat({ title: state.value.toString() });
      return {
        map: map,
        value: "",
      };
    });
    console.log(this.state.map);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    console.log(this.state.map);
    return (
      <div className="App">
        <h2>Top Rappers !</h2>
        <ul className="ulist">
          {this.state.map.map((element) => {
            //console.log(element.title);
            return (
              <li key={element.title}>
                <Event element={element} />
              </li>
            );
          })}
        </ul>
        <form className="form" onSubmit={this.add.bind(this)}>
          <input
            className="input"
            type="text"
            placeholder="Enter name"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button
            className="button"
            type="submit"
            disabled={this.state.value === ""}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default App;
