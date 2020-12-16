import React, { Component } from "react";
import { graphql } from '@apollo/client/react/hoc';
import { likeContent } from "../queries/likeContent";

class Contents extends Component {
    state = {}

    handleLikeContent = (id, likes) => {
        this.props.mutate({ 
            variables: { id },
            optimisticResponse: {
                __typename: "Mutation",
                likeLyric: {
                    id: id,
                    __typename: "LyricType",
                    likes: likes + 1
                }
            }
        });
    }

    render(){
        const contents = this.props.contents.map((content, idx)=> {
            return (
                <li key={idx}>
                    {content.content}
                    <button onClick={ () => this.handleLikeContent(content.id, content.likes) }>Like: {content.likes}</button>
                </li>
            )
        })
        return(
            <div>
                <ul>
                    {contents}
                </ul>
            </div>
        )
    }
}

export default graphql(likeContent)(Contents);