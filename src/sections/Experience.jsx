import React from "react";
import TitledHeader from "../components/HeroModels/TitledHeader";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";

const Experience = () => {
  return (
    <section
      id="experince"
      className="w-full  md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitledHeader title=" My Experience" sub="My Career Overview" />
        <div className="mt-32 relative">
          <div className="z-50 relative xl:space-y-32 space-y-10 ">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
