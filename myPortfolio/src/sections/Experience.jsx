import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  return (
    <section className="flex-center md:mt-15 mt-5 section-padding xl:px-0">
      <div id="about" className="w-full h-full md:px-20 px-5">
        <TitleHeader title="About Me" />
        <div className="mt-20 relative">
          <div className="relative z-50 xl:space-y-32 space-y-16">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">

                {/* Card — full width trên mobile, 1/2 trên xl */}
                <div className="w-full xl:w-3/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} className="w-30" alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>

                {/* Text — full width trên mobile, 1/2 trên xl */}
                <div className="w-full xl:w-3/6">
                  <div className="flex items-start">
                    {/* Timeline chỉ hiện trên xl */}
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="relative z-20 xl:pl-10">
                      <h1 className="font-semibold xl:text-3xl text-2xl">{card.title}</h1>
                      <p className="my-5 text-white-50">
                        🗓️&nbsp;{card.date}
                      </p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                        {card.responsibilities.map((responsibility, index) => (
                          <li key={index} className="xl:text-lg text-base">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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