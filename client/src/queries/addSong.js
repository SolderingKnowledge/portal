import { gql }  from "@apollo/client";

export default gql`#just like in the http://localhost:5000/graphql
    mutation AddSong($title: String){
        addSong(title: $title){
            title
        }
    }
`

export const addSong = gql`#just like in the http://localhost:5000/graphql
    mutation AddSong($title: String){
        addSong(title: $title){
            title
        }
    }
`