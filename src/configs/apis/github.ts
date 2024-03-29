import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { GITHUB_TOKEN } from '@configs/environments';

export const GithubClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
