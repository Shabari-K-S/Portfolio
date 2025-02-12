import React, { useState } from "react";
import Navbar from "../ui/Navbar";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "bb433b2d-903e-4d77-ba5c-43ad07cd4ec9",
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.error("Error submitting form:", response.status);
    }
  };

  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center mt-24">
        <form
            onSubmit={handleSubmit}
            className="border border-[#27272a] p-8 rounded-xl shadow-lg w-96 text-white"
        >
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your Name"
            required
            className="w-full p-2 mb-4 rounded border border-[#27272a] focus:outline-none focus:ring-2"
            />
            <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Email"
            required
            className="w-full p-2 mb-4 rounded border border-[#27272a]"
            />
            <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your Message"
            required
            className="w-full p-2 mb-4 rounded border border-[#27272a]"
            />
            <button
            type="submit"
            className="w-full p-2 rounded bg-[#27272a] hover:bg-[#ededed] hover:text-zinc-800 transition ease-in-out duration-300 font-semibold"
            >
            Submit Form
            </button>
            {success && (
            <p className="text-green-400 mt-3 text-center">Form submitted successfully!</p>
            )}
        </form>
        </div>
    </>
  );
};

export default Contacts;
