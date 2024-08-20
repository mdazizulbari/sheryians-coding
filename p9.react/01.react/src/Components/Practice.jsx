import { useState } from "react";

const Practice = () => {
  const [value, setValue] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="p-5 flex gap-5">
      {value.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        onClick={() =>
          setValue(() => value.filter(item => item%2 !== 0))
        }
        className=" px-3 py-1 text-xs text-white rounded-full bg-blue-600 hover:bg-blue-800"
      >
        Click
      </button>
    </div>
  );
};
export default Practice;
