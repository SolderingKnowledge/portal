import React, { Component } from "react";
import { graphql } from '@apollo/client/react/hoc';
// import { Link } from "react-router-dom";
import { addContent } from "../queries/addContent";
// import { fetchSongs } from "../queries/fetchSongs";

class AddContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: ""
        }
    }

    handleContent = async e => {
        e.preventDefault();

        await this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        })
        await this.setState({ content: "" })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleContent}>
                    <label>Add a Content</label>
                    <input onChange={ e => this.setState({content: e.target.value }) } value={this.state.content} />
                </form>
            </div>
        )
    }
}


export default graphql(addContent)(AddContent);