import { gql }  from "@apollo/client";

export default gql`
    {
        songs {
            title
            id
        }
    }
`;

export const fetchSongs = gql`
    {
        songs {
            title
            id
        }
    }
`;