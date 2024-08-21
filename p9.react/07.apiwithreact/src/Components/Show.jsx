import axios from "axios";
import { useState } from "react";

const Show = () => {

  const [products, setProducts] = useState([]);
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
    <div className="w-full flex flex-col justify-center items-center">
      <button
        onClick={getproducts}
        className="px-4 py-2 mb-2 rounded-full bg-blue-600 text-white"
      >
        Get Products
      </button>
      <ul className="w-full flex flex-col items-center">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="w-fit px-4 py-2 mb-1 rounded-full bg-green-600 text-white">
              {product.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  )
}
export default Show