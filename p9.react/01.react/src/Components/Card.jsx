import React from "react";

function Card(){
    return (
<>
<div className="w-full h-screen bg-gray-200">
    <div className="w-52 rounded-md bg-gray-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="w-full h-32 rounded-md bg-gray-300 overflow-hidden">
        <img className=" w-full h-full object-cover" src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className="w-full px-3 py-4">
        <h5 className="font-semibold">Amazon Basics</h5>
            <p className="text-xs mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut optio cupiditate!</p>
    </div>
    </div>
</div>
</>
    )
}

export default Card;