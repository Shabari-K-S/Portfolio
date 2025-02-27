import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from "../ui/Footer";
import { FaLinkedin } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import { FaCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const success = () => toast.success(
    "Message sent successfully",{
      autoClose:3000,
      hideProgressBar:true,
      className:"toastify-success",
      position:"bottom-right",
      icon: <FaCheck />
    }
  )

  const error = () => toast.error(
    "Error sending message",{
      autoClose:3000,
      hideProgressBar:true,
      className:"toastify-error",
      position:"bottom-right",
      icon: <MdError />
    }
  )

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try{
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
        setName("");
        setEmail("");
        setMessage("");
        success();
      } else {
        console.error("Error submitting form:", response.status);
        error();
      }
    } catch (e) {
      error();
      console.log("Error:" , e)
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center mt-24">
        <div className="w-full md:w-1/2 px-10 md:pr-16 lg:p-24 md:pl-5  text-white flex flex-col gap-5">
          <h2 className="text-4xl font-bold">
            Contact Me
          </h2>
          <p className="text-zinc-100/90 text-xl">
            Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
          </p>
          <div className="flex flex-col gap-5 text-zinc-400">
            <a
              className="p-1.5 rounded-md cursor-pointer hover:scale-[110%] hover:translate-x-[8%] hover:text-white flex items-center gap-3 transition w-fit duration-300 ease-in-out"
              href="mailto:shabaricse2003@gmail.com"
              target="_blank"
            >
              <MdOutlineMailOutline className="w-[22px] h-[22px]" /> shabaricse2003@gmail.com
            </a>
            
            <a
              className="p-1.5 rounded-md cursor-pointer hover:scale-[110%] hover:translate-x-[8%] hover:text-white flex items-center gap-3 transition w-fit duration-300 ease-in-out"
              href="https://www.linkedin.com/in/shabari-k-s/"
              target="_blank"
            >
              <FaLinkedin className="w-[22px] h-[22px]" /> Shabari K S
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 lg:w-1/3 w-full px-10 py-10 flex flex-col rounded-xl shadow-lg  text-white gap-5"
        >
          <div className="flex flex-col justify-center items-start gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
              className="w-full p-2 mb-4 rounded border border-[#27272a] focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              required
              className="w-full p-2 mb-4 rounded border border-[#27272a] focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-2 rounded border border-[#27272a] focus:outline-none focus:border-slate-400"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded bg-[#27272a] hover:bg-[#ededed] hover:text-zinc-800 transition ease-in-out duration-300 font-semibold"
          >
            Submit Form
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center w-full justify-center mt-5 gap-5">
        <div className="min-w-3xl h-0.5 mt-5 bg-[#222222]"></div>
          <Footer />
      </div>
      <ToastContainer />
    </>
  );
};


export default Contacts;
