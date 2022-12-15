import { gql } from '@apollo/client';

export const getPinnedRepos = gql`
    query GetPinnedRepos($repos: Int!, $topics: Int!, $language: Int!) {
      viewer {
        pinnedItems(first: $repos) {
          nodes {
            ... on Repository {
              name
              url
              repositoryTopics(first: $topics) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              languages(first: $language) {
                edges {
                  node {
                    name
                  }
                }
              }
              description
            }
          }
        }
      }
    }
`;
