import React from "react";
import TitledHeader from "../components/HeroModels/TitledHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className=" flex-center section-padding">
      <div className="w-full h-full md:px-10 p-5">
        <TitledHeader
          title="What People Say About Me?"
          sub="Customer Feedback Highlights"
        />
        <div className="md:columns-3 columns-1 mt-16">
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            <GlowCard card={{ review }}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={imgPath} alt={name} />
                </div>
                <div>
                  <p>{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
