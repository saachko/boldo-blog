import type { GetStaticProps } from 'next';

import Intro from 'components/Intro';
import News from 'components/News';
import Order from 'components/Order';

import newsList from 'utils/newsList';

function Home() {
  return (
    <main>
      <Intro />
      <News newsList={newsList} />
      <Order />
    </main>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = () => ({
  props: {
    title: 'Boldo | Blog',
  },
});
