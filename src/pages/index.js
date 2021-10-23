import AboutMe from '../App/Components/AboutMe';
import CardList from '../App/Components/Card/CardList';
import Layout from '../App/Components/Layout';
import { Main } from '../styles';

import { ButtonA as Button } from '../App/Components/Button';

export default function Home() {
  return (
    <>
      <Layout>
        <Main>
          <AboutMe />
          <CardList />
          <Button href="https://github.com/matheustodao?tab=repositories" type="button" className="see-all">
            Ver Todos
          </Button>
        </Main>
      </Layout>
    </>
  );
}
