import notFoundImage from "../../public/images/404.gif";

const UrlNotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img src={notFoundImage} className=" object-cover" alt="" />
    </div>
  );
};
export default UrlNotFound;
