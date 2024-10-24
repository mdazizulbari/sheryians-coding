import Loading from "./Loading";
import Footer from "./partials/Footer";
import Nav from "./partials/Nav";

const Home = () => {
  document.title = "example | Homepage";

  return Home ? (
    <div>
      <Nav />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
};
export default Home;
