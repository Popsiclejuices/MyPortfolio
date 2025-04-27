import React from "react";
import TitledHeader from "../components/HeroModels/TitledHeader";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { techStackImgs } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top-center",
        },
      }
    );
  });

  return (
    <div className="flex-center section-padding " id="skills">
      <div className="w-full h-full md:px-10 px-5">
        <TitledHeader
          sub="Here's the skills that i can contribute"
          title="My Preferred Tech Stack"
        />
        <div className="tech-grid">
          {/* {techStackIcons.map((icon) => (
            <div
              key={icon}
              className="card-border mb-20 tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden
            group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
