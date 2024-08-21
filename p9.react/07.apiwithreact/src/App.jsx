import axios from "axios";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const addproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products/";
    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(products);

  return (
    <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
      <button
        onClick={addproducts}
        className="px-4 py-2 rounded-full bg-blue-600 text-white"
      >
        Add Products In Api
      </button>
      <button
        onClick={getproducts}
        className="px-4 py-2 rounded-full bg-blue-600 text-white"
      >
        Get Products
      </button>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li className="px-4 py-2 mb-1 rounded-full bg-green-600 text-white">
              {product.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
};
export default App;
