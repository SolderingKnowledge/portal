import { gql }  from "@apollo/client";

export const addContent = gql`#just like in the http://localhost:5000/graphql
    mutation AddLyricToSong($content: String, $songId: ID ){
        addLyricToSong(content: $content, songId: $songId){
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`