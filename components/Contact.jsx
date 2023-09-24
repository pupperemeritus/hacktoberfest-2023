import React from "react";

const Contact = () => {
  const location =
    "Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad.";
  const email = "cosc@cbit.ac.in";
  const phone = "Akil: +91 94426 21187";

  return (
    <div className="mx-auto p-4 sm:w-1/2 h-fit py-0 my-0">
      <div className=" flex flex-col items-center gap-2">
        <h1 className=" text-center text-4xl justify-center justify-items-center text-bblue-200 shimmerb">
          Contact Information
        </h1>
        <div className=" h-[2px] bg-bblue-200 w-16"></div>
      </div>
      <div className="bg-gray-200 rounded-lg p-6 ">
        {/* <h2 className="text-lg font-semibold text-center mb-4">Contact Information</h2> */}
        <div className="border border-solid border-bgold-200 p-3 rounded-md mt-3">
          <h3 className="text-md font-medium text-bblue-100">Location:</h3>
          <p className="text-gray-700">{location}</p>
        </div>
        <div className="border border-solid border-bgold-200 p-3 rounded-md mt-3">
          <h3 className="text-md font-medium text-bblue-100">Email:</h3>
          <p className="text-gray-700">{email}</p>
        </div>
        <div className="border border-solid border-bgold-200 p-3 rounded-md mt-3">
          <h3 className="text-md font-medium  text-bblue-100">Phone:</h3>
          <p className="text-gray-700">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
