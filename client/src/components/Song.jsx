import React, { Component } from "react";
export default class Song extends Component {
    render(){
        const { song, destroySong } = this.props;
        return (
            <div className="collection-item">{song.title} <button onClick={() => destroySong(song.id)}>X</button></div>
        )
    }
}