import React from "react";
import Laptop from "./assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className=" max-w[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="w-[600px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            distinctio doloremque dolore tenetur dolores provident adipisci nam
            quam magni, libero ullam cupiditate, quidem eligendi incidunt nisi
            saepe neque, eos quos!
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md my-6 font-medium  mx-auto md:mx-0  py-3 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
