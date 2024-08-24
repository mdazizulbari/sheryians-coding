import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-10 text-xl text-gray-300 bg-blue-600 flex justify-center gap-20">
      <NavLink
        style={(element) => {
          return {
            color: element.isActive ? "white" : "",
            fontWeight: element.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(element) => {
          return [
            element.isActive ? "text-white" : "",
            element.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={(element) => {
          return [
            element.isActive ? "text-white" : "",
            element.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};
export default Nav;
