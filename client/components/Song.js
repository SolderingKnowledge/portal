// const Song = props => {
//     console.log("ahfjks", props);
//     return (
//         <li key={props.key}>{props.song.title}</li>
//     )
// }
// export default Song;

import React, { Component } from "react";
export default class Song extends Component {
    render(){
        return (
            <li key={this.props.key} className="collection-item">{this.props.song.title}</li>
        )
    }
}