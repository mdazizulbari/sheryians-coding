import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utilities/Context";
import { useContext } from "react";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Nav />
      <section className="w-10/12 p-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((product, index) => (
          <Link
          key={product.id}
            to={`/details/${product.id}`}
            className="card w-1/5 h-[30vh] mr-3 mb-3 border shadow rounded-lg flex flex-col justify-center items-center"
          >
            <div
              style={{
                backgroundImage:
                  `url(${product.image})`,
              }}
              className="w-full h-4/5 mb-3 bg-contain bg-no-repeat bg-center hover:scale-110"
            ></div>
            <h3 className="hover:text-blue-300 text-center">{product.title}</h3>
          </Link>
        ))}
      </section>
    </>
  ) : (
    <Loading />
  );
};
export default Home;
