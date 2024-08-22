const Nav = () => {
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
      <ul className="w-10/12">
        <li className="mb-3 flex items-center">
          <span className="w-4 h-4 mr-2 rounded-full bg-blue-100"></span>cat 1
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-4 h-4 mr-2 rounded-full bg-red-100"></span>cat 1
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-4 h-4 mr-2 rounded-full bg-green-100"></span>cat 1
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
