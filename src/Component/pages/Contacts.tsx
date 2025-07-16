import { useState } from "react";
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
      <div className="flex flex-col md:flex-row justify-center mt-24 text-[#e4e4e7] bg-[#0f0f11]">
        <div className="w-full md:w-1/2 px-10 md:pr-16 lg:p-24 md:pl-5 flex flex-col gap-5">
          <h2 className="text-4xl font-bold text-[#fafafa]">Contact Me</h2>
          <p className="text-zinc-400 text-lg">
            Feel free to use the form or drop me an email. Old-fashioned phone calls work too.
          </p>

          <div className="flex flex-col gap-5 text-zinc-400">
            <a
              className="p-2 rounded-md cursor-pointer hover:translate-x-2 hover:text-blue-400 transition-all flex items-center gap-3 w-fit"
              href="mailto:shabaricse2003@gmail.com"
              target="_blank"
            >
              <MdOutlineMailOutline className="w-[22px] h-[22px]" /> shabaricse2003@gmail.com
            </a>

            <a
              className="p-2 rounded-md cursor-pointer hover:translate-x-2 hover:text-blue-400 transition-all flex items-center gap-3 w-fit"
              href="https://www.linkedin.com/in/shabari-k-s/"
              target="_blank"
            >
              <FaLinkedin className="w-[22px] h-[22px]" /> Shabari K S
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 lg:w-1/3 w-full px-10 py-10 flex flex-col rounded-xl bg-[#1a1a1d] border border-[#2c2c2e] shadow-xl text-white gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-zinc-300">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-md border border-[#2a2a2d] bg-[#0f0f11] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-zinc-300">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md border border-[#2a2a2d] bg-[#0f0f11] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-zinc-300">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 rounded-md border border-[#2a2a2d] bg-[#0f0f11] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
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
