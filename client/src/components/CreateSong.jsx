import React, { Component } from "react";
import { graphql } from '@apollo/client/react/hoc';
import { Link } from "react-router-dom";
import { addSong } from "../queries/addSong";
import { fetchSongs } from "../queries/fetchSongs";

class CreateSong extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title },
            refetchQueries: [{ query: fetchSongs }]
        }).then(() => {
            this.props.history.push("/");
        })
    }

    render(){
        return (
            <div>
                <Link to="/">go back</Link>
                <h3>Create a New Song!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Song Title: </label>
                    <input onChange={ e => this.setState({ title: e.target.value })} value={this.state.title} />
                </form>
            </div>
        )
    }
}


export default graphql(addSong)(CreateSong);