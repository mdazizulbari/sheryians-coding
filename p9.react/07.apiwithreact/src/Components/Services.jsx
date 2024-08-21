import { useState } from "react";
import axios from "../Utilities/Axios";
import { useEffect } from "react";

const Services = () => {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is very large data");


  const getusers = () => {
    axios
      .get("/users")
      .then((users) => {
        console.log(users);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getusers()
    console.log("Services component is created");
    return () => {
      console.log("Services component is deleted");
    };
  },[second]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1>{first}</h1>
      <button onClick={()=> setFirst("Normal data has been changed")} className="px-4 py-2 mb-2 rounded-full bg-blue-600 text-white">
        Change normal data
      </button>

      <h1>{second}</h1>
      <button onClick={()=> setSecond("Large data has been changed")} className="px-4 py-2 mb-2 rounded-full bg-blue-800 text-white">
        Change large data
      </button>
    </div>
  );
};
export default Services;
