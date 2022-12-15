type Typename = { __typename: string };

type Result<Name> = Typename & {
  // eslint-disable-next-line no-unused-vars
  [K in keyof Name]: Typename & {
    name: string
  }
};

export interface RepoPinned extends Typename {
  id: string,
  name: string,
  url: string,
  repositoryTopics: Typename & { nodes: Result<{topic: string}>[] },
  languages: Typename & { edges: Result<{node: string}>[] },
  description: string
}

export interface PinnedItems extends Typename {
  viewer: {
    pinnedItems: Typename & {
      nodes: RepoPinned[]
    },
  }
}
