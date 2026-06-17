import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  // Fade-in section title on scroll
  useGSAP(() => {
    gsap.fromTo(
      ".tech-slider-wrapper",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  // Duplicate for seamless infinite loop
  const items = [...techStackImgs, ...techStackImgs];

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Skills"
        />

        {/* Slider wrapper */}
        <div className="tech-slider-wrapper mt-16 overflow-hidden">
          <div className="tech-slider-track">
            {items.map((tech, index) => (
              <div key={index} className="tech-pill">
                <img
                  src={tech.imgPath}
                  alt={tech.name}
                  className="tech-pill-img"
                  onError={(e) => {
                    // fallback: hide broken image, show name only
                    e.target.style.display = "none";
                  }}
                />
                <span className="tech-pill-name text-xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;