"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 bg-[url('/background.jpg')] bg-left`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div
        id="home"
        className="flex justify-center items-center flex-col relative z-10 py-[100px]"
      >
        {/* <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1> */}
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-center items-center"
        >
          {/* <div className={styles.heroDText}></div> */}
          <h1 className={styles.heroHeading}>Shibarian</h1>
        </motion.div>
        <p className="text-white text-center w-[1/2] mt-[30px] sm:display-none font-extrabold text-lg">
          Shibarian (SHB) is a Meme-Tastic, Crypto-Riding Space Rocket Fueling
          SHB and Shib Token Burn & Hype for Shibarium's Big Bang!
        </p>
        {/* <p className="text-white text-center w-[1/2] mt-[20px] text-xl font-extrabold"></p> */}
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/* <div className="absolute w-full h-[350px] hero-gradient rounded-[140px] z-[0] -top-[30px]" /> */}
        <img
          src="/bg-shibarian.png"
          alt="background"
          className="flex w-[50%] h-[50%] bg-auto md:bg-contain relative z-10 bg-center m-auto"
        />
        {/* <a href="#explore">
          <div className="w-full flex justify-right sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
