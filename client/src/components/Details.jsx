import React, { Component } from "react";
import { graphql } from '@apollo/client/react/hoc';
import { Link } from "react-router-dom";
import { getSongDetails } from "../queries/getSongDetails"
import AddContent from "./AddContent";
import Contents from "./Contents"

class Details extends Component {
    render(){
        // console.log("urlId", this.props.params.id); // take from url
        const { song } = this.props.data
        if(!song) return <h1>Fetching a Song..</h1> // null in real life projects
        // console.log('song', song);
        console.log("song.lyrics", song.lyrics);
        return (
            <div>
                <Link to="/">go back</Link>
                <h1 style={{width: "500px", margin: "auto"}}>{song.title}</h1>
                {/* get from url */}
                <Contents contents={song.lyrics} />
                <AddContent songId={this.props.match.params.id} />
            </div>
        )
    }
}

export default graphql(getSongDetails, {
    // graphQL intercepting this.props for use, so it is props
    options: props => {
        // console.log("myProps", props);
        return { variables: { id: props.match.params.id } } 
    }
})(Details);