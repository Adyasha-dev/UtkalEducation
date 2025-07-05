"use client";

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
      form.message === ""
    ) {
      alert("Please enter all the field information");
    } else if (form.name.length < 5) {
      alert("Name should be a minimum of 5 characters");
    } else {
      console.log("Form submitted:", form);
      // Handle form submission logic here
    }
  };

  return (
    <div className="main-container py-16 px-4 md:px-10">
      <div className="text-center mb-6">
        <p className="text-3xl md:text-4xl font-bold">Leave a Message</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="px-4 py-3 border border-black rounded-md bg-slate-200 w-full"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-4 py-3 border border-black rounded-md bg-slate-200 w-full"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="px-4 py-3 border border-black rounded-md bg-slate-200 w-full"
            />
          </div>

          {/* Textarea */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="border border-black rounded-md bg-slate-200 w-full max-w-5xl h-40 px-4 py-3"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white hover:bg-orange-400 transition duration-300 px-6 py-3 rounded-md w-full max-w-md"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form2;
