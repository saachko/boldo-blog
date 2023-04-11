import type { GetStaticProps } from 'next';

function Home() {
  return <div>Home</div>;
}

export default Home;

export const getStaticProps: GetStaticProps = () => ({
  props: {
    title: 'Boldo | Blog',
  },
});
