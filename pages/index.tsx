import type { GetServerSideProps, NextPage } from "next";

type PageProps = {
  iter: number;
};

const Home: NextPage<PageProps> = ({ iter }) => {
  return <h1>{iter}</h1>;
};

let iter = 0;

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return {
    props: {
      iter: iter++,
    },
  };
};

export default Home;
