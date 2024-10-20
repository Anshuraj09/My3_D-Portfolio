import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div
        className="absolute inset-0 top-[100px] max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-start gap-5"
      >
        {/* Violet Gradient Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Text Section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Anshu Raj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces for my portfolio.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="flex justify-center items-center w-full h-[50vh] sm:h-[70vh]">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
