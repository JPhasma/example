import Head from 'next/head';

import { getAllTeletubbies } from 'noonoo/getAllTeletubbies';
import Container from './components/Container';
import { get } from 'http';

const Home = ({ res }: any) => {
  console.log(res);
  return (
    <>
      <Head>
        <title>I LOVE the teletubbies</title>
        <meta name='description' content='I love the teletubbies!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container res={res} />
    </>
  );
};

export default Home;

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await getAllTeletubbies();
  console.log(res);
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { res },
  };
}
