import { PinnedItems } from '@type/PinnedItems';

import { gql, ApolloQueryResult } from '@apollo/client';
import { GithubClient } from '@configs/apis/github';

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
