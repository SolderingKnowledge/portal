import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Song extends Component {
    render(){
        const { song, destroySong } = this.props;
        return (
            <div className="collection-item" style={{display: "flex", justifyContent: "space-between", width: "500px", margin: "auto" }}>
                <div><Link to={`songs/${song.id}`}>{song.title}</Link></div>
                <div><button onClick={() => destroySong(song.id)}>X</button></div>
            </div>
        )
    }
}