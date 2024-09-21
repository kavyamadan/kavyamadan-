import { useState } from "react";
import {
  FaLocationArrow,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mwpedqev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take your <span className="text-purple">Bhangra</span> skills
          to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Unlock the rhythm and passion of Bhangra! Join our classes to immerse
          yourself in this vibrant dance form, perfect for all skill levels.
          Whether you're a beginner looking to learn the basics or an
          experienced dancer wanting to refine your moves, our expert
          instructors are here to guide you. Discover the joy of expressing
          yourself through dance, meet like-minded individuals, and be part of a
          community that celebrates the rich cultural heritage of Bhangra. Sign
          up today and take your skills to new heights!
        </p>
        <a
          href="https://www.instagram.com/bhangraarena.ca?igsh=bGV1b3h1d2xnMjMx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Images and GIFs */}
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-xl font-bold">Meet our Team</h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <img
            src="/T1.png"
            alt="Bhangra Class 1"
            className="w-full h-auto rounded"
          />
          <img
            src="/T2.png"
            alt="Bhangra Class 2"
            className="w-full h-auto rounded"
          />
          <img
            src="/T3.png"
            alt="Bhangra Class 3"
            className="w-full h-auto rounded"
          />
          <img
            src="/gj1.gif"
            alt="Bhangra GIF 1"
            className="w-full h-auto rounded"
          />
          <img
            src="/gj2.gif"
            alt="Bhangra GIF 2"
            className="w-full h-auto rounded"
          />
          <img
            src="/gj3.gif"
            alt="Bhangra GIF 3"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md mt-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 mb-4 border rounded bg-transparent text-white border-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mb-4 border rounded bg-transparent text-white border-white"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 mb-4 border rounded bg-transparent text-white border-white"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center mt-10">
        <div className="flex space-x-4 mt-2"></div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kavya Madan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
