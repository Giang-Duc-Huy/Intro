import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader
          title="My Projects"
        />
        <div className="showcaselayout mt-20">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://www.figma.com/design/f3mczrO7L5BTj5rsgsmLuT/Hotelix?node-id=0-1&t=vJkneAbNhH0NxiE8-1" target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper ">
                <img src={`${import.meta.env.BASE_URL}images/project1.png`} alt="Ryde App Interface" />
              </div>
              <div className="text-content">
                <h2>
                  Hotelix — Hotel Booking App
                </h2>
                <p className="text-white-50 md:text-xl">
                  A UX case study on simplifying hotel discovery and booking — from research and wireframes to a tested, high-fidelity prototype.
                </p>
              </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
             <a href="https://github.com/PeanLutHuynh/Project_Blockify" target="_blank" rel="noopener noreferrer">
                <div className="project" ref={libraryRef}>
                  <div className="image-wrapper bg-[#050F1D] border border-[#3D83F5]" >
                    <img
                      src={`${import.meta.env.BASE_URL}images/project2.png`}
                      alt="Library Management Platform"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2>Real-Time Chat App</h2>  
                </div>
              </a>

              <a href="https://github.com/Giang-Duc-Huy/Chatchat" target="_blank" rel="noopener noreferrer">
                <div className="project" ref={ycDirectoryRef}>
                  <div className="image-wrapper bg-[#010102] border border-[#3D83F5]">
                    <img src={`${import.meta.env.BASE_URL}images/project3.png`} 
                    className="w-full h-full object-cover" 
                    alt="YC Directory App" />
                  </div>
                  <h2>Blockify — E-Commerce Platform</h2>
                </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;