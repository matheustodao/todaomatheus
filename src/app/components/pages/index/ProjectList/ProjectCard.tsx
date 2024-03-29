import { RepoPinned } from '@type/github/PinnedItems';
import React from 'react';

import { Container, WrapperTags, Tags } from './styles';

interface IProps {
  repos: RepoPinned[],
}

export default function ProjectCard({ repos }: IProps) {
  return (
    <>
      {repos.map((item) => (
        <Container key={item.name}>
          <div className="information">
            <h5>
              {item.name}
              <a target="__blank" href={item.url}>
                _
              </a>
            </h5>

            {item.description?.length > 0 && (
              <p>{item.description}</p>
            )}
          </div>

          <WrapperTags>
            {item.languages.edges.map(({ node }) => (
              <Tags key={node.name}>{node.name}</Tags>
            ))}

            {item.repositoryTopics.nodes.map(({ topic }) => (
              <Tags key={topic.name}>{topic.name}</Tags>
            ))}
          </WrapperTags>
        </Container>
      ))}
    </>
  );
}
