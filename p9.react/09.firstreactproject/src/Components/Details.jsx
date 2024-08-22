import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utilities/Context";
// import axios from "../Utilities/Axios";
import Loading from "./Loading";

const Details = () => {
  const navigate = useNavigate()
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();

  // const getsingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //     // console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((product) => product.id == id)[0]);
    }
    // getsingleProduct();
  }, []);

  const productDeleteHandeler = (id) => {
    const filteredProducts = products.filter((product) =>product.id !== id)
    setproducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/")
  };

  return product ? (
    <div className="w-9/12 p-[10%] m-auto flex justify-between items-center">
      <img className="object-contain h-4/5 w-2/5" src={`${product.image}`} />
      <div className="content w-6/12">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="my-5 text-gray-300">{product.category}</h3>
        <h2 className="mb-3 text-red-300">$ {product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link className="px-5 py-2 mr-5 text-blue-300 border border-blue-200">
          Edit
        </Link>
        <button
          onClick={()=>productDeleteHandeler(product.id)}
          className="px-5 py-2 text-red-300 border border-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default Details;
