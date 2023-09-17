import React from "react";

const Contact = () => {
  const location = 'Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad.';
  const email = 'cosc@cbit.ac.in';
  const phone = 'Gopal: +91 98480 39729';

  return (
    <div className="mx-auto p-4 sm:w-1/2">
      <div className="bg-gray-200 rounded-lg p-6 ">
        <h2 className="text-lg font-semibold text-center mb-4">Contact Information</h2>
        <div className="border border-solid border-bgold-200 p-3 rounded-md mt-3">
          <h3 className="text-md font-medium">Location:</h3>
          <p className="text-gray-700">{location}</p>
        </div>
        <div className="border border-solid border-bgold-200 p-3 rounded-md mt-3">
          <h3 className="text-md font-medium">Email:</h3>
          <p className="text-gray-700">{email}</p>
        </div>
        <div className="border border-solid border-bgold-200 p-3 rounded-md mt-3">
          <h3 className="text-md font-medium">Phone:</h3>
          <p className="text-gray-700">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
