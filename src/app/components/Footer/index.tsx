import { Container } from './styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div>
        <span>
          ©
          {' '}
          {currentYear}
        </span>

        <strong>
          Devoloped and design
          {' '}
          <a href="https://linkedin.com/in/matheustodao">
            by Matheus Todao
          </a>
        </strong>
      </div>
    </Container>
  );
}
