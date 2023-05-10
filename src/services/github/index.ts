import type { PinnedItems } from '@type/github/PinnedItems';
import { ApolloQueryResult } from '@apollo/client';
import { GithubClient } from '@configs/apis/github';
import { getPinnedRepos } from './graphql/getPinnedRepos';

class GithubService {
  listPinnedRepositories(): Promise<ApolloQueryResult<PinnedItems>> {
    return GithubClient.query({
      query: getPinnedRepos,
      variables: {
        repos: 6,
        topics: 2,
        language: 2,
      },
    });
  }
}

export default new GithubService();
