import { gql } from "@apollo/client";

export const LOAD_MOVIES = gql`
    query Query {
        allFilms {
            films {
                title
                director
                releaseDate
            }
        }
    }
`