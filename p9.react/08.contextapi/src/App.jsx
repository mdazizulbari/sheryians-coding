import {Link, Route, Routes} from "react-router-dom"
import Home from "./Components/Home";
import User from "./Components/User";

const App = () => {

  return (
    <div>
      <h1>Use Data</h1>
      <User/>
      <nav className="p-10 flex justify-center gap-10 bg-blue-600 text-white">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}/>
        <Route path="/about" element={() => <About />} />
      </Routes>
    </div>
  );
};
export default App;
