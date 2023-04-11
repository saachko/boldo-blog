import type { GetStaticProps } from 'next';

import Intro from 'components/Intro';

function Home() {
  return (
    <main>
      <Intro />
    </main>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = () => ({
  props: {
    title: 'Boldo | Blog',
  },
});
