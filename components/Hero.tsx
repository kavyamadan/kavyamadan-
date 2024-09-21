import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="fixed w-full top-0 z-20 bg-white shadow-md dark:bg-black-100">
        <nav className="flex justify-between items-center px-6 py-4">
          <div className="text-lg font-bold">Kavya's Bhangra</div>
          <div>
            <ul className="flex space-x-6">
              {/* Add navigation items here */}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div id="home" className="pt-28 pb-20">
        <div>
          {/* UI: Spotlights */}
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* Main Content */}
        <div
          className="h-auto w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
           relative flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
           bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        {/* Text and Button */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              The ultimate passion of bhangra by
            </p>

            {/* Text with Generate Effect */}
            <TextGenerateEffect
              words="Kavya Madan"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Bringing the Joy of Bhangra to Life. Welcome to my vibrant world
              of Bhangra, where tradition meets passion! As a dedicated Bhangra
              dancer, I celebrate the rich cultural heritage of Punjabi folk
              dance, infusing each performance with energy and enthusiasm. Join
              me on this rhythmic journey that captures the heart and soul of
              Punjab. <br /> Whether you're planning a special event or looking
              for an electrifying performance, please book us to make your
              occasion unforgettable. <br /> Let's dance together and create
              lasting memories!
            </p>

            {/* Magic Button linking to Instagram */}
            <a
              href="https://www.instagram.com/__kavyaaa/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="CHECK OUT MY INSTAGRAM"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            {/* Added Image Below Paragraph */}
            <img
              src="/TATTI.png" // Replace with your image path
              alt="Bhangra Performance"
              className="w-full max-w-md my-4 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
