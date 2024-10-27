import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-100 p-20 pb-40"
    >
      <div className="max-w-screen-xl w-full h-full flex flex-col justify-center items-start m-auto">
        <div className="mb-28">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline ">
            Contact
          </p>
          <p className="mt-7">Submit the form below to get in touch with me</p>
        </div>
        <div className="w-full">
          <form
            action="https://getform.io/f/aollgqkb"
            method="POST"
            className="flex flex-col justify-center items-center w-full"
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="bg-transparent border-2 border-gray-500 rounded-md p-2 w-1/2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="bg-transparent border-2 border-gray-500 rounded-md p-2 w-1/2 my-4 focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              className="bg-transparent border-2 border-gray-500 rounded-md p-2 w-1/2 focus:outline-none"
            />
            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-medium mt-5">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
