import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="pb-20 text-white text-9xl">User</h1>
      <div className="w-full flex flex-wrap gap-10 items-center justify-center">
        <Link className="w-64 p-3 mb-3 rounded-full text-xl text-center font-bold bg-blue-200 hover:bg-blue-600 hover:text-white" to="/user/rafin">
          Rafin
        </Link>
        <Link className="w-64 p-3 mb-3 rounded-full text-xl text-center font-bold bg-blue-200 hover:bg-blue-600 hover:text-white" to="/user/rami">
          Rami
        </Link>
        <Link className="w-64 p-3 mb-3 rounded-full text-xl text-center font-bold bg-blue-200 hover:bg-blue-600 hover:text-white" to="/user/rohan">
          Rohan
        </Link>
        <Link className="w-64 p-3 mb-3 rounded-full text-xl text-center font-bold bg-blue-200 hover:bg-blue-600 hover:text-white" to="/user/rafit">
          Rafit
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};
export default User;
