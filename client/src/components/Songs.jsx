import React, { Component } from "react";
import { graphql } from '@apollo/client/react/hoc';
import { Link } from "react-router-dom";
import Song from "./Song"
import { fetchSongs } from "../queries/fetchSongs";
import { deleteSong } from "../queries/deleteSong";

class Songs extends Component {

    // destroySong = (id) => {
    //     this.props.mutate({ variables: { id } }).then(()=> this.props.data.refetch());
    // }

    destroySong = async id => {
        await this.props.mutate({ variables: { id } })//delet
        await this.props.data.refetch();//update UI by refetching
    }

    render(){

        if(this.props.data.loading){
            return <h1>Loading..</h1>
        }
        const songs = this.props.data.songs.map( (song, idx) => {
            return (
                <li key={idx} className="collection-item">
                    <Song song={song} destroySong={this.destroySong} />
                </li>
            )
        })
        return (
            <div className="container">
                <ul className="collection">
                    { songs }
                </ul>
                {/* <Link to="/songs/new"><i className="material-icons">add</i></Link> */}
                <Link to="/songs/new">Add New Song</Link>
            </div>
        )
    }
}

export default graphql(deleteSong)(
    graphql(fetchSongs)(Songs)
);