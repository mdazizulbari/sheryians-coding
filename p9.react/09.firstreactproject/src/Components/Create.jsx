import { useContext, useState } from "react";
import { ProductContext } from "../Utilities/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const addProductHandeler = (element) => {
    element.preventDefault();

    if (!title || !image || !category || !price || !description) {
      alert("Please fill out all the fields");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
    // console.log(product);
  };

  return (
    <form
      onSubmit={addProductHandeler}
      className="w-screen h-screen p-[5%] flex flex-col items-center"
    >
      <h1 className="w-1/2 mb-5 text-3xl">Add New Product</h1>
      <input
        type="text"
        className="w-1/2 p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
        onChange={(element) => settitle(element.target.value)}
        value={title}
        placeholder="Title"
      />
      <input
        type="url"
        className="w-1/2 p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
        onChange={(element) => setimage(element.target.value)}
        value={image}
        placeholder="Image URL"
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          className="w-[48%] p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
          onChange={(element) => setcategory(element.target.value)}
          value={category}
          placeholder="Category"
        />
        <input
          type="number"
          className="w-[48%] p-3 px-8 mb-3 text-xl rounded-full bg-gray-100"
          onChange={(element) => setprice(element.target.value)}
          value={price}
          placeholder="price"
        />
      </div>
      <textarea
        rows="10"
        className="w-1/2 p-3 px-8 mb-3 text-xl rounded-3xl bg-gray-100"
        onChange={(element) => setdescription(element.target.value)}
        value={description}
        placeholder="Enter product description here..."
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-2 text-blue-300 rounded-full border border-blue-200">
          Add New Product
        </button>
      </div>
    </form>
  );
};
export default Create;
