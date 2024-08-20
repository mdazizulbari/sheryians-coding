import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ImageSlide = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <div className="w-60 h-32 bg-gray-500 rounded-xl flex relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1724093829687-8a5c22bde17f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={` transition-transform delay-700 ease-in-out h-full w-full object-cover shrink-0 ${
            value === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
        />
        <img
          src="https://images.unsplash.com/photo-1723908183237-d8af011f465d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={` transition-transform delay-700 ease-in-out h-full w-full object-cover shrink-0 ${
            value === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
        />
        <span
          onClick={() => setValue(() => !value)}
          className="w-5 h-5 flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full"
        >
          <FaArrowRightLong size={".7em"} />
        </span>
      </div>
    </div>
  );
};
export default ImageSlide;
