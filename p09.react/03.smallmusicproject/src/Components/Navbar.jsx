import styles from "./style.module.css";
const Navbar = ({ data }) => {
  return (
    <div className="w-full px-20 py-3 flex items-center justify-between">
      <h3
        className={`${styles.a} ${styles.b} text-xl font-semibold px-2 py-1 rounded-full`}
      >
        Orange
      </h3>
      <div className="py-2 px-4 flex gap-4 rounded-full text-white text-xs bg-orange-500">
        <p>Favourites</p>
        <p>{data.filter((item) => item.added).length}</p>
      </div>
    </div>
  );
};
export default Navbar;
