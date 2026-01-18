import { useState } from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { ToastContainer, toast } from 'react-toastify';
import { FaCheck, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdError, MdOutlineMailOutline } from "react-icons/md";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const success = () => toast.success(
    "Message sent successfully", {
    autoClose: 3000,
    hideProgressBar: true,
    className: "toastify-success",
    position: "bottom-right",
    icon: <FaCheck />
  }
  );

  const error = () => toast.error(
    "Error sending message", {
    autoClose: 3000,
    hideProgressBar: true,
    className: "toastify-error",
    position: "bottom-right",
    icon: <MdError />
  }
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
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
      console.log("Error:", e);
    }
  };

  return (
    <div className="bg-[#0f0f11] text-gray-200 min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-20">

        {/* Header content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? Feel free to drop a message or reach out on social media.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <ContactLink
              href="mailto:shabaricse2003@gmail.com"
              icon={<MdOutlineMailOutline />}
              label="shabaricse2003@gmail.com"
            />
            <ContactLink
              href="https://www.linkedin.com/in/shabari-k-s/"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <ContactLink
              href="https://github.com/Shabari-K-S"
              icon={<FaGithub />}
              label="GitHub"
            />
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-[#1a1a1d]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full p-3 rounded-lg bg-[#0f0f11] border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="w-full p-3 rounded-lg bg-[#0f0f11] border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-[#0f0f11] border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3.5 rounded-lg bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-200 transition-colors shadow-lg active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

const ContactLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default Contacts;
