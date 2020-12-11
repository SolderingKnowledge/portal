import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "@apollo/client";
import Song from "./Song"

class Songs extends Component {
    render(){
        // const { songs } = this.props.data;
        if(this.props.data.loading){
            return <h1>Loading..</h1>
        }
        const songs = this.props.data.songs.map((song, idx) => {
            return (
                <Song song={song} key={idx} />
            )
        })
        return (
            <ul className="collection">
               { songs }
            </ul>
        )
    }
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(Songs);