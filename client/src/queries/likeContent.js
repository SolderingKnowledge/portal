import { gql }  from "@apollo/client";

export const likeContent = gql`#just like in the http://localhost:5000/graphql
    mutation LikeLyric($id: ID){
        likeLyric(id: $id){
            id
            likes
        }
    }
`