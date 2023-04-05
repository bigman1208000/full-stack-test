import gql from "graphql-tag";

export const GET_TRACK = gql`
  query (
    $artistName: String!
    $genreName: String!
    $minPrice: Float!
    $maxPrice: Float!
    $page: Float!
    $pageSize: Float!
  ) {
    getTracks(
      artistName: $artistName
      genreName: $genreName
      minPrice: $minPrice
      maxPrice: $maxPrice
      page: $page
      pageSize: $pageSize
    ) {
      id
      name
      price
      duration
      genre
    }
  }
`;
