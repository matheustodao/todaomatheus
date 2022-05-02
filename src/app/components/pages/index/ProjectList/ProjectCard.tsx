import { limitTextLenght } from 'utils/limitTextLenght';

import { Container, WrapperTags, Tags } from './styles';

const descriptionHTML = '<div>[CRUD] Colocando em <strong>prática</strong> conhecimentos adquiridos sobre ReactJS, NodeJS, PostgreSQL, Styled-Components.</div>';

export default function ProjectCard() {
  return (
    <Container>
      <div className="information">
        <h5>
          <a target="__blank" href="https://github.com/matheustodao/MyContacts">MyContacts</a>
        </h5>

        {descriptionHTML.length > 0 && (
        <p
          dangerouslySetInnerHTML={{
            __html: limitTextLenght(descriptionHTML.replace('<div>', '').replace('</div>', '')),
          }}
        />
        )}
      </div>

      <WrapperTags>
        <Tags>javascript</Tags>
        <Tags>html</Tags>
        <Tags>styled-components</Tags>
        <Tags>node</Tags>
      </WrapperTags>
    </Container>
  );
}
