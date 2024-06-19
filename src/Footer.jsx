import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FPLaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="cursor-pointer" />
          <FaInstagram size={30} className="cursor-pointer" />
          <FaTwitterSquare size={30} className="cursor-pointer" />
          <FaGithubSquare size={30} className="cursor-pointer" />
          <FaDribbbleSquare size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
              Analytics
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer ">
              Marketing
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer ">
              Commerce
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer ">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a#00df9a] cursor-pointer ">
              Pricing
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a#00df9a] cursor-pointer">
              Documentation
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a#00df9a] cursor-pointer ">
              Guides
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a#00df9a] cursor-pointer ">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a] cursor-pointer">
              About
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a] cursor-pointer">
              Blog
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a] cursor-pointer">
              Jobs
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a] cursor-pointer">
              Press
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a#00df9a] cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
              Claim
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
              Policy
            </li>
            <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
              Terms
            </li>
          </ul>
        </div>
      </div>{" "}
      hover:text-[]
    </div>
  );
};
