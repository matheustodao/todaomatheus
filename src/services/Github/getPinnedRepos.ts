import { PinnedItems } from '@type/PinnedItems';

import { GithubClient } from 'services/apollo-clients/github';
import { gql, ApolloQueryResult } from '@apollo/client';

export const getPinnedRepos: Promise<ApolloQueryResult<PinnedItems>> = GithubClient.query({
  query: gql`
    query getPinnedRepos {
      viewer {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              name
              url
              repositoryTopics(first: 2) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              languages(first: 2) {
                edges {
                  node {
                    name
                  }
                }
              }
              descriptionHTML
            }
          }
        }
      }
    }
  `,
});
