import { Container } from './styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div>
        <span>
          © 2021 -
          {' '}
          {currentYear}
        </span>

        <h4>
          Devoloped and design
          {' '}
          <a href="https://linkedin.com/in/matheustodao">
            by Matheus Todao
          </a>
        </h4>
      </div>
    </Container>
  );
}
