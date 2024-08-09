import Link from 'next/link'

const Header = (props) => {
  return (
    <header className="w-full h-20 px-10 bg-green-600 flex items-center justify-between">
      <h2>Logo</h2>
      <h3>Hello {props.user}</h3>
      <div className="menu flex items-center gap-10">
        <Link href="/About">About</Link>
        <Link href="/Products">Products</Link>
        <Link href="/Courses">Courses</Link>
      </div>
    </header>
  );
};
export default Header;
