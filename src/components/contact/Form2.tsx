"use client"; // Ensure this is the first line

import React, { useState } from "react";

function Form2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.email === "" ||
      form.subject === "" ||
      form.message
    ) {
      alert("Please enter all the filed information");
    } else if (form.name.length < 5) {
      alert("name should be of minimum 5 charecter ");
    }
    console.log("Form submitted:", form);
    // Handle form submission logic here
  };

  return (
    <>
      <div className="main-container py-16">
        <div className="text-center mb-4">
          <p className="text-4xl font-bold">Leav a Message</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col items-center justify-center   ">
            <div className="md:flex gap-7">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="px-20 py-4 border-black border-solid rounded-md bg-slate-200"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="px-20 py-4 border-black border-solid rounded-md bg-slate-200"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="subject"
                className="px-20 py-4 border-black border-solid rounded-md bg-slate-200"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="mt-4 border-black border-solid rounded-md bg-slate-200 w-[55rem] h-[15rem]"
            />
            <button
              type="submit"
              className="mt-4 bg-black text-white  hover:bg-orange-300  h-[4rem] w-[25rem]"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form2;
