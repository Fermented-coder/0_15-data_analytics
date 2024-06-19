import React from "react";
import Singles from "../components/assets/single.png";
import Double from "../components/assets/double.png";
import Trible from "../components/assets/triple.png";

export const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8§  rounded-lg  hover:bg-gray-100  hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={Singles}
            alt="/"
          />
          <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
          <p className="text-center text-4xl font-bold">149€</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto hover:bg-black hover:text-[#00df9a] duration-300">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg  hover:bg-gray-100  hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={Double}
            alt="/"
          />
          <h1 className="text-2xl font-bold text-center py-8">Double User</h1>
          <p className="text-center text-4xl font-bold">199€</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto hover:bg-black hover:text-[#00df9a] duration-300">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg  hover:bg-gray-100  hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={Trible}
            alt="/"
          />
          <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
          <p className="text-center text-4xl font-bold">299€</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto hover:bg-black hover:text-[#00df9a] duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
