"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";
import axios, { Axios } from "axios";

const main = () => {
  const [marks, setMarks] = useState(80);
  const [user, setuser] = useState("Aziz");
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
    } catch (error) {
      console.error("Error fetching the Image");
    }
  };

  return (
    <div className="bg-black text-white w-full h-screen text-5xl">
      <Header user={user} />
      <main>
        <section className="p-10">
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
        </section>

        <section className="bg-black h-full p-10">
        <button
          onClick={getImages}
          className="bg-blue-500 rounded-full py-2 px-4"
        >
          Get Images
        </button>
        <div className="p-10">
          {Images.map((element, i) => {
            return (
              <img
                src={element.download_url}
                key={i}
                width={300}
                height={300}
                className="m-10 rounded-xl inline-block"
              />
            );
          })}
        </div>
        </section>
      </main>
    </div>
  );
};
export default main;
