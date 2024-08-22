import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-9/12 p-[10%] m-auto flex justify-between items-center">
      <img
        className="object-contain h-4/5 w-2/5"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      />
      <div className="content w-6/12">
        <h1 className="text-4xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="my-5 text-gray-300">men's clothing</h3>
        <h2 className="mb-3 text-red-300">$109.95</h2>
        <p className="mb-[5%]">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <Link className="px-5 py-2 mr-5 text-blue-300 border border-blue-200">
          Edit
        </Link>
        <Link className="px-5 py-2 text-red-300 border border-red-200">
          Delete
        </Link>
      </div>
    </div>
  );
};
export default Details;
