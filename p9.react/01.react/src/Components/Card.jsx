import React, { useState } from "react";

function Card() {
  const data = [
    {
      name: "Apple Store",
      description: "Get all your Apple products in one place!",
      image:
        "https://images.unsplash.com/photo-1602053540920-027b608ed4db?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: false,
      //   liked: false,
    },
    {
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut optio cupiditate!",
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instock: true,
      //   liked: false,
    },
    {
      name: "Google Pixel 8 Pro",
      description: "The best Android that you can find in 2024",
      image:
        "https://fdn.gsmarena.com/imgroot/reviews/23/google-pixel-8-pro/lifestyle/-1024w2/gsmarena_010.jpg",
      instock: true,
      //   liked: false,
    },
  ];
  const eventAddtoCart = () => {
    alert("Added to cart");
  };
  const [value, setValue] = useState({ name: "sma", isBanned: false });
  const [value2, setValue2] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <div className="p-4">
        <h5>Name: {value.name}</h5>
        <h6>Banned: {value.isBanned.toString()}</h6>
        <div className="flex gap-5">
          {value2.map((item) => (
            <h1>{item}</h1>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() =>
              setValue2(
                value2.filter((item, index) => index != value2.length - 1)
              )
            }
            className=" px-3 py-1 text-xs text-white rounded-full bg-blue-600 hover:bg-blue-800"
          >
            Remove Numbers
          </button>
          <button
            onClick={() => setValue({ ...value, isBanned: !value.isBanned })}
            className={`px-3 py-1 ${
              value.isBanned ? " bg-red-600" : "bg-blue-600"
            } text-xs text-white rounded-full`}
          >
            Change
          </button>
          <button
            className=" px-3 py-1 text-xs text-white rounded-full bg-blue-600 hover:bg-blue-800"
            onClick={() => {
              setValue({ ...value, age: 19 });
            }}
          >
            Add age in the object
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-gray-200 flex flex-wrap gap-10 items-center justify-center">
        {data.map((element, index) => (
          <div
            key={index}
            className="w-52 rounded-xl bg-gray-100 overflow-hidden"
          >
            <div className="w-full h-32 bg-gray-300 ">
              <img
                className=" w-full h-full object-cover"
                src={element.image}
              />
            </div>
            <div className="w-full px-3 py-4">
              <h5 className="font-semibold">{element.name}</h5>
              <p className="text-xs mt-3">{element.description}</p>
              <p
                className={`text-xs ${
                  element.instock ? "bg-green-600" : "bg-red-600"
                } px-3 py-1 w-fit rounded-xl mt-3 text-white`}
              >
                {element.instock ? "In Stock" : "Out of Stock"}
              </p>
              {/* <button
                onClick={setValue({ ...value, liked: !value.liked })}
                className={`text-xs px-3 py-1 hover:bg-blue-700 ${
                  element.liked ? "bg-blue-800" : "bg-blue-600"
                } bg-blue-600 w-full rounded-xl mt-3 text-white`}
              >
                Like the Product?
              </button> */}
              <button
                onClick={eventAddtoCart}
                className={`text-xs px-3 py-1 hover:bg-blue-700 ${
                  element.instock ? "block" : "hidden"
                } bg-blue-600 w-full rounded-xl mt-3 text-white`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
