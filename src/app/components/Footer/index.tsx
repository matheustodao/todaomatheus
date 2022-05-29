import { Container } from './style';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Container>
      <p>
        Developed and Designed by
        {' '}
        <a href="https://linkedin.com/in/matheustodao">Matheus Todao</a>
      </p>

      <strong>
        ©
        {' '}
        {currentYear}
      </strong>
    </Container>
  );
}
