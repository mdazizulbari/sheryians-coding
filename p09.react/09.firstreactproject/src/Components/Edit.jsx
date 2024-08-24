import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utilities/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    // id: "",
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (event) => {
    // console.log(event.target.name, event.target.value)
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((product) => product.id == id)[0]);
  }, [id]);
  //   console.log(product)

  const addProductHandeler = (element) => {
    element.preventDefault();

    if (
      product.title.trim().length < 4 ||
      product.image.trim().length < 4 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 4 ||
      product.category.trim().length < 4
    ) {
      alert("Every input must have 4 characters");
      return;
    }

    const productIndex = products.findIndex((product) => product.id == id);

    const copyData = [...products];
    copyData[productIndex] = { ...products[productIndex], ...product };

    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
  };

  return (
    <form
      onSubmit={addProductHandeler}
      className="w-screen h-screen p-[5%] flex flex-col items-center"
    >
      <h1 className="w-1/2 mb-5 text-3xl">Edit Product</h1>
      <input
        type="text"
        className="w-1/2 p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
        placeholder="Title"
      />
      <input
        type="url"
        className="w-1/2 p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
        placeholder="Image URL"
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          className="w-[48%] p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
          placeholder="Category"
        />
        <input
          type="number"
          className="w-[48%] p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
          placeholder="price"
        />
      </div>
      <textarea
        rows="10"
        className="w-1/2 p-3 px-8 mb-3 text-xl rounded-3xl bg-gray-100"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
        placeholder="Enter product description here..."
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-2 text-blue-300 rounded-full border border-blue-200">
          Edit Product
        </button>
      </div>
    </form>
  );
};
export default Edit;
