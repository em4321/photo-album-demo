import React, { Component } from "react";
import axios from "axios";
import Album from "./components/Album";

//App's job is to get and hold data
//Any features that manipulate data should be added inside app
class App extends Component {
  state = {};
  //Gets data from API
  async componentDidMount() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`
    );
    //Mutating the array to return 50 items:
    data.length = 50;
    //Stores data from API in the state:
    this.setState({ album: data });
  }

  onDeleteItem = (id) => {
    const album = [...this.state.album];
    const index = album.findIndex((item) => item.id === id);
    album.splice(index, 1);
    this.setState({ album });
  };

  render() {
    console.log(this.state);

    //conditional rendering to show loading while waiting for data:
    if (!this.state.album) {
      return <p>Loading...</p>;
    }
    //Passes all album information which lives in the state to a child called album:
    return <Album album={this.state.album} onDeleteItem={this.onDeleteItem} />;
  }
}

export default App;
