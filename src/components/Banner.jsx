import React from "react";
import { TbCircleDotFilled } from "react-icons/tb";
import bannerImg from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

export default function Banner() {
  return (
    <div className="bg-slate-50 py-10 container flex justify-between items-center mx-auto px-4 md:px-8">
      <div className="">
        <button className="flex items-center gap-2 bg-gray-100 px-4   py-2 rounded-full border hover:bg-gray-200 transition-all">
          <TbCircleDotFilled className="text-green-500 text-xl" />
          <span className="font-medium text-gray-700">
            New: AI-Powered Tools Available
          </span>
        </button>
        <h2 className="text-[72px] font-bold">Supercharge Your <br></br> Digital Workflow</h2>
        <p className="mb-[32px]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="">
          <button className="btn btn-active btn-primary mr-2 rounded-2xl">Explore Products</button>
          <button className="btn btn-outline btn-info rounded-2xl">
            <CiPlay1 />
            Watch Demo
            </button>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg hidden md:block">
        {/* সাধারণ ইমেজ ট্যাগ */}
        <img
          src={bannerImg}
          alt="BPL Auction Banner"
          className=""
        />
      </div>
    </div>
  );
}
