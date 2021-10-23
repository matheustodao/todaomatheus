import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  Container,
  Project,
  Title,
  Description,
  Techs,
  Language,
} from './styles';

export default function Card({
  id,
  title,
  description,
  languages,
  mockup,
}) {
  return (
    <Container reverse={(id % 2)}>
      <div className="border">
        <div />
        <div />
      </div>
      <Project reverse={(id % 2)}>
        <div className="container-informations">
          <div className="wrapper-informations">
            <Title>{title}</Title>

            <Description>
              {description}
            </Description>
          </div>

          <Techs reverse={(id % 2)}>
            {languages.map((item) => (
              <Language
                key={Math.random()}
                language={item}
              >
                {item}
              </Language>
            ))}
          </Techs>
        </div>

        <div className="mockup">
          <Image
            src={mockup}
            width={458}
            height={242}
          />
        </div>
      </Project>
    </Container>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  mockup: PropTypes.any,
};

Card.defaultProps = {
  mockup: null,
};
