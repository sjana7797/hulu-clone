import Head from "next/head";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Results from "../components/Results/Results";

//import Requests File
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/site-preview.png" />
      </Head>
      <main>
        <Header />
        <Nav />
        <Results results={results} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
