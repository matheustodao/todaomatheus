import Image from 'next/image';
import PropTypes from 'prop-types';
import { Container, Techs } from './styles';

export default function Header({ children }) {
  return (
    <Container>
      <div className="bg-header">
        <Techs>
          <Image
            src="/images/svg/nodejs-logo.svg"
            alt="NodeJS"
            width={50}
            height={50}
          />
          <Image
            src="/images/svg/reactjs-logo.svg"
            alt="ReactJs"
            width={50}
            height={50}
          />
          <Image
            src="/images/svg/javascript-logo.svg"
            alt="Javascript"
            width={50}
            height={50}
          />
        </Techs>
      </div>
      {children}
    </Container>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};
