import type { NextPage } from 'next';
import Layout from '../components/layout'
import Hero from '../components/hero'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Main />
    </Layout>
  );
};

export default Home;
