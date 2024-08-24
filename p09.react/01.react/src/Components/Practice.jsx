import { useState } from "react";

const Practice = () => {
  const [value, setValue] = useState([
    { name: "sma", age: 18 },
    { name: "bari", age: 19 },
    { name: "ali", age: 20 },
    { name: "ahmed", age: 21 },
    { name: "mohammed", age: 22 },
    { name: "sami", age: 23 },
  ]);
  const [val, setVal] = useState(false);
  return (
    <div className="p-5 flex gap-5 justify-center items-center">
      <h1>{val === false ? "val is false rn" : "val is true rn"}</h1>
      <button onClick={()=>{setVal(!val)}} className="px-3 py-1 bg-blue-600 rounded-full text-white text-xs">
        Val Btn
      </button>
      <div className="w-1 h-12 bg-black"></div>
      {value.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      <button
        onClick={() =>
          setValue(
            value.map((item) =>
              item.name === "ali" ? { name: "ali", age: 21 } : item
            )
          )
        }
        className="px-3 py-1 text-xs text-white rounded-full bg-blue-600 hover:bg-blue-800"
      >
        Update
      </button>
    </div>
  );
};
export default Practice;
