import React, { useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
function App() {
  const data = [
    {
      added: false,
      name: "Challenger",
      artist: "SMA",
      image:
        "https://images.unsplash.com/photo-1724092461963-605d96a95c20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      added: false,
      name: "Do it!",
      artist: "Idk",
      image:
        "https://images.unsplash.com/photo-1723771106486-eb5fceb082a9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      added: false,
      name: "Lifecycle",
      artist: "Andrew Tate",
      image:
        "https://images.unsplash.com/photo-1723945785190-b6f91da9eceb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      added: false,
      name: "Husteller",
      artist: "John",
      image:
        "https://plus.unsplash.com/premium_photo-1706807135398-31770beffb74?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((previousState) => {
      return previousState.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-300 ">
        <Navbar data={songData} />
        <div className="px-20 mt-10 flex flex-wrap justify-center gap-10">
          {songData.map((obj, index) => (
            <Card
              data={obj}
              key={index}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
