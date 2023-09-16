import React from "react";

const Contact = () => {
  const location = 'Chaitanya Bharathi Intitute of Technology, Gandipet, Hyderabad.';
  const email = 'cosc@cbit.ac.in';
  const phone = 'Gopal: +91 98480 39729';

  return (
    <div>
      <h2>Contact Information</h2>
      <div>
        <h3>Location:</h3>
        <p>{location}</p>
      </div>
      <div>
        <h3>Email:</h3>
        <p>{email}</p>
      </div>
      <div>
        <h3>Phone:</h3>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default Contact;
