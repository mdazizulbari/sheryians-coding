import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Utilities/Context";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "../Utilities/Axios";

const Home = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category)

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined"){
      //  getProductCategory();
       setfilteredProducts(products.filter((product) =>product.category == category));
    }
  }, [category, products]);
  // console.log(filteredProducts);

  return products ? (
    <>
      <Nav />
      <section className="w-10/12 p-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/details/${product.id}`}
              className="card w-1/5 h-[30vh] mr-3 mb-3 border shadow rounded-lg flex flex-col justify-center items-center"
            >
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
                className="w-full h-4/5 mb-3 bg-contain bg-no-repeat bg-center hover:scale-110"
              ></div>
              <h3 className="hover:text-blue-300 text-center">
                {product.title}
              </h3>
            </Link>
          ))}
      </section>
    </>
  ) : (
    <Loading />
  );
};
export default Home;
