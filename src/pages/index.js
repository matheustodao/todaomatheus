import AboutMe from '../App/Components/AboutMe';
import CardList from '../App/Components/Card/CardList';
import Layout from '../App/Components/Layout';
import { Main } from '../styles';

export default function Home() {
  return (
    <>
      <Layout>
        <Main>
          <AboutMe />
          <CardList />
        </Main>
      </Layout>
    </>
  );
}
