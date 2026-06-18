import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".hero-text h1",
  //     { y: 50, opacity: 0 },
  //     { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
  //   );
  // });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="text-[#3D83F5] text-8xl">
                <b>Giang</b>
              </h1>
              <h1 className="text-8xl"><b>Duc Huy</b> </h1>
            </div>

            <p className="text-white/50 text-base sm:text-2xl md:text-3xl relative z-10 pointer-events-none">
              Crafting pixel designs into clean, responsive code.
            </p>

            <Button
              text="View My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            {/* <HeroExperience /> */}
          </div>
        </figure>
      </div>

    </section>
  );
};

export default Hero;