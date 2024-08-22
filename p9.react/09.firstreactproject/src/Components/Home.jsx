import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="w-10/12 p-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="card w-1/5 h-[30vh] mr-3 mb-3 border shadow rounded-lg flex flex-col justify-center items-center"
        >
          <div
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
            className="w-full h-4/5 bg-contain bg-no-repeat bg-center hover:scale-110"
          ></div>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </Link>
      </section>
    </>
  );
};
export default Home;
