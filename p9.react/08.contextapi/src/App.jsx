import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import UserDetail from "./Components/UserDetail";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <nav className="p-10 flex justify-center gap-10 bg-blue-600 text-white">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
export default App;
