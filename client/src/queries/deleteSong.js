import { gql }  from "@apollo/client";

export const deleteSong = gql`#just like in the http://localhost:5000/graphql
    mutation DeleteSong($id: ID){
        deleteSong(id: $id){
            id
        }
    }
`