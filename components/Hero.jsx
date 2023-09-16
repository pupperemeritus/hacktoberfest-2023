import React from "react";
// import im from '../public/images/HFest23_Logo.png' ;
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" mx-auto flex flex-col-reverse items-center w-[90%] my-auto">
      <div className="mx-auto md:w-[60%]">
        <h1 className=" md:text-3xl ">
          <span className=" text-bblue-200">Welcome to</span>
          <br />
          <span className=" text-bgold-200">
            CBIT Hacktoberfest Hackathon'23
          </span>
        </h1>
        <p>The Biggest Technical Fest of CBIT 7th and 8th October,2023</p>
        <a href="https://www.instagram.com/">Register!</a>
      </div>
      <div className=" my-auto">
        <Image
          width={1125}
          height={450}
          src="/images/HFest23_Logo.png"
          alt="Logo"
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
