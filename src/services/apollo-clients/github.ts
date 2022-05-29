import { ApolloClient, InMemoryCache } from '@apollo/client';

export const GithubClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
