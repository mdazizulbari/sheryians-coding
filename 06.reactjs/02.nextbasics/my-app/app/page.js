"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";

const main = () => {
  const [marks, setMarks] = useState(80);
  const [user, setuser] = useState("Aziz");

  return (
    <div className="bg-black text-white w-screen h-screen text-5xl">
      <Header user={user} />
      <main className="p-10">
        <h1 className="mb-20">
          {user}'s total marks were {marks}
        </h1>
        <button
          onClick={() => {
            setMarks(33);
          }}
          className="bg-gray-500 rounded-full py-2 px-4"
        >
          Update
        </button>
      </main>
    </div>
  );
};
export default main;
