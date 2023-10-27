import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import MoviesList from '../../Components/MoviesList';

const errorLink = onError(({ graphqlErrors }) => {  // Used to catch errors
  if(graphqlErrors) {
    graphqlErrors.map(({message}) => {
      alert(`Error: ${message}`);
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'})  // Our GraphQL API link
])

const client = new ApolloClient({  // Apollo configuration
  cache: new InMemoryCache,
  link: link
})

export default function MoviesScreen({ stackNavigation }) {
  
  return (
    <ApolloProvider client={client}>
      <MoviesList stackNavigation={stackNavigation}/>
    </ApolloProvider>
  );
}
