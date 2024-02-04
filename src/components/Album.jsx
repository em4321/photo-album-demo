import React, { Component } from "react";
import AlbumItem from "./AlbumItem";

//Album's job is about dealing with the data and to create many items
class Album extends Component {
  render() {
    console.log(this.props);
    //Asking what props it has been sent
    return this.props.album.map((item, index) => {
      //Create children
      return (
        <AlbumItem
          {...item}
          onDeleteItem={this.props.onDeleteItem}
          index={index}
        />
      );
    });
  }
}

export default Album;
