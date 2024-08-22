import { useContext } from "react";
import { ProductContext } from "../Utilities/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinctCategory =
    products &&
    products.reduce(
      (accumulator, currentvalue) => [...accumulator, currentvalue.category],
      []
    );
  distinctCategory = [...new Set(distinctCategory)];
  // console.log(distinctCategory);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  console.log(color());

  return (
    <nav className="w-2/12 h-full p-5 bg-gray-50 flex flex-col items-center">
      <a
        href="/create"
        className="px-5 py-2 text-blue-300 border border-blue-200"
      >
        Add New Product
      </a>
      <hr className="my-3 w-10/12" />
      <h1 className="w-10/12 mb-3 text-2xl">Category Filter</h1>
      <div className="w-10/12">
        {distinctCategory.map((category, index) => (
          <Link
            to={`/?category=${category}`}
            key={index}
            className="mb-3 flex items-center"
          >
            <span style={{backgroundColor: color()}} className="w-4 h-4 mr-2 rounded-full"></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Nav;
