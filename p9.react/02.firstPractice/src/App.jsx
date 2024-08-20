import React from "react";
import Card from "./Components/Card.jsx";

function App() {
  const data = [
    {
      name: "Sma",
      profession: "student",
      image:
        "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Smith",
      profession: "agent",
      image:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Abbas",
      profession: "teacher",
      image:
        "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rohan",
      profession: "engineer",
      image:
        "https://images.unsplash.com/photo-1524538198441-241ff79d153b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ivu",
      profession: "doctor",
      image:
        "https://plus.unsplash.com/premium_photo-1674933214600-483da3cb2d0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
    <div className="w-full h-screen bg-gray-200 flex gap-4 items-center justify-center">
      {data.map((item, index)=>(
      <Card values={item} />
      ))}
    </div>
    </>
  );
}

export default App;
