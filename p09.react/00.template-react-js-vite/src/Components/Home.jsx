import Loading from "./Loading";
import Nav from "./partials/Nav";

const Home = () => {
  document.title = "example | Homepage";

  return Home ? (
    <div>
      <Nav />
    </div>
  ) : (
    <Loading />
  );
};
export default Home;
