"use client";
import React, { useState, FormEvent } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you can implement your email sending logic, e.g., using an API or email service
    // For demonstration, we'll just show a success message
    setStatus("Message sent successfully!");

    // Clear the fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-12 bg-[#080808]">
      <h2 className="text-3xl font-bold text-center text-white">Contact Me</h2>
      <p className="text-center text-gray-600 mt-2">
        Feel free to send me a message using the form below.
      </p>
      <div className="mt-8 max-w-md mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-500 font-bold text-white py-2 rounded-md hover:bg-white hover:text-black transition duration-200"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-2 text-center text-green-600">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
