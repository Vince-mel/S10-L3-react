import MoviesCards from "./MoviesCards";

const Home = () => {
  return (
    <>
      <MoviesCards title="Harry Potter" category="Fantasy" />
      <MoviesCards title="Star Wars" category="Sci Fi" />
      <MoviesCards title="Batman" category="Trending Now" />
    </>
  );
};

export default Home;
