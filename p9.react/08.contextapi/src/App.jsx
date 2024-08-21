import { useState } from "react";
import {Link, Route, Routes} from "react-router-dom"
import Home from "./Components/Home";

const App = () => {
  const [user, setUser] = useState([
    {
      id: 1,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
    },
    {
      id: 2,
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
    },
  ]);

  return (
    <div>
      <h1>Use Data</h1>
      {JSON.stringify(user)}
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
