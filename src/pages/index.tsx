import { GetStaticProps } from "next";
import Head from "next/head";
import { getAllSummaries, TeletubbySummary } from "noonoo/getAllSummaries";

type HomeProps = {
  summaries: TeletubbySummary[];
};

const Home = ({ summaries }: HomeProps) => {
  console.log("summaries", summaries);
  return (
    <>
      <Head>
        <title>I LOVE the teletubbies</title>
        <meta name="description" content="I love the teletubbies!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {summaries.map((summary, index) => (
        <div key={index}>{summary.name}</div>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      summaries: await getAllSummaries(),
    },
  };
};

export default Home;
