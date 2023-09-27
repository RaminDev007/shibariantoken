"use client";

import { motion } from "framer-motion";
import { Footer, TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Explore from "./Explore";
import GetStarted from "./GetStarted";
import Tokenomics from "./WhatsNew";
import Insights from "./Insights";

const About = () => (
  <section
    id="about"
    className={`${styles.paddings} relative z-10 hero-gradient`}
  >
    <div className="gradient-02 z-0"></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Shibarian" textStyle="text-center" id="about" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        Shibarian (SHB) is the Ultimate Meme-fuelled, Community-driven Rocket
        Ship: Not just another crypto blip on the radar, but a supernova in the
        meme universe! Its mission is to spread chuckles, 'wow' reactions, and a
        sense of camaraderie while we shape the decentralized cosmos!
      </motion.p>
      {/* <motion.img
        variants={fadeIn("up", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img> */}
    </motion.div>
    <Explore />
    <Tokenomics />
    <GetStarted />
    <Insights />
  </section>
);

export default About;
