import Show from "./Components/Show";
import Home from "./Components/Home";
import { Link, Routes, Route } from "react-router-dom";
import Services from "./Components/Services";

const App = () => {
  // const addproducts = () => {
  //   const api = "https://fakestoreapi.com/products";
  //   axios
  //     .post(api, {
  //       title: "test product",
  //       price: 13.5,
  //       description: "lorem ipsum set",
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <nav className="w-full p-2 bg-blue-600 flex items-center justify-center gap-10">
        <Link className="px-4 py-2 bg-blue-300 rounded-full" to="/">
          Home
        </Link>
        <Link className="px-4 py-2 bg-blue-300 rounded-full" to="/show">
          Show
        </Link>
        <Link className="px-4 py-2 bg-blue-300 rounded-full" to="/services">
          Services
        </Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* <button
        onClick={addproducts}
        className="px-4 py-2 rounded-full bg-blue-600 text-white"
      >
        Add Products In Api
      </button> */}
    </div>
  );
};
export default App;
