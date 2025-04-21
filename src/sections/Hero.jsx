import Buttons from "../components/Buttons";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        opacity: 0,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute z-10 top-0 left-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Creating
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50
                          "
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real Projects</h1>
              <h1>That Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-lG relative z-10 pointer-events-none">
              Hi I'm Kyle, a Full-Stack Developer in Philippines with a passion
              for coding.
            </p>
            <Buttons
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              text="See my Work"
            />
          </div>
        </header>
        {/* Right Content */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
