import React from "react";
// import im from '../public/images/HFest23_Logo.png' ;
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" mx-auto flex flex-col-reverse items-center w-[90%] my-auto">
      <div className="mx-auto flex flex-col text-center">
        <h1 className="text-4xl tracking-tight ">
          <span className=" text-bblue-100">Welcome to </span>

          <span className=" text-bgold-200 font-semibold shimmer">
            CBIT Hacktoberfest Hackathon'23
          </span>
        </h1>
        <p className=" mt-6 leading-8">
          The Biggest Technical Fest of CBIT! <br />
          7th and 8th October 2023
        </p>
        <Link href="/register" className=" self-center mt-6">
          <button className=" px-6 py-3 bg-none hover:bg-Manga-100 hover:bg-opacity-10 duration-300 my-2  text-bgold-200 border border-bgold-200 rounded-lg text-xl mt-3">
            Register
          </button>
        </Link>
      </div>
      <div className=" my-auto mt-24 md:mt-16 mb-24 md:mb-12">
        <Image
          width={1125}
          height={450}
          src="/images/HFest23_LogoCrop.png"
          alt="Logo"
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
