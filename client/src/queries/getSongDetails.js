import { gql }  from "@apollo/client";

export const getSongDetails = gql`
    query getSongDetails($id: ID!) {#you have to provide this argument ID
        song(id: $id) {
            title
            id
            lyrics {#enhancing
                id
                content
                likes
            }
        }
    }
`;