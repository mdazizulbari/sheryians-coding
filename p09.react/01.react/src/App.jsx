import React from "react";
import Card from "./Components/Card";
import Practice from "./Components/Practice";
import ImageSlide from "./Components/ImageSlide";
import PropsLesson from "./Components/PropsLesson";

function App() {
  // const data = ["SMA", "SMI", "Abbas", "Rohan", "Ivu"];
  return (
    <>
      <PropsLesson text={"Download"} color={"bg-blue-600"} />
      <PropsLesson text={"Know More"} color={"bg-red-600"} />
      {/* <ImageSlide /> */}
      {/* <Practice /> */}
      {/* <Card/> */}
      {/* {data.map((element, index) => (
        <div key={index} className="px-3 py-4 bg-yellow-400 rounded-md w-fit">
          {element}
        </div>
      ))} */}
    </>
  );
}

export default App;
