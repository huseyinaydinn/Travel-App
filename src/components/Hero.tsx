import { SearchContext } from "../context/search";
import Search from "./Search";
import { useContext } from "react";
import GooglePlayBtn from "../assets/icons/buttons/google-play.svg";
import AppStoreBtn from "../assets/icons/buttons/app-store.svg";
import HeroImage from "../assets/images/hero/travel.svg";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "../variants";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="bg-[#dedede] md:h-screen pt-12" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text&img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between h-auto">
          <div className="flex flex-col w-1/2">
            {/* text */}
            <div className="text-center xl:max-w-xl xl:text-left mt-8 xl:mt-0">
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-2xl font-bold xl:h1"
              >
                Explore the <span className="text-accent">Best Places</span> By
                One Click!
              </motion.h1>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-sm md:description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
              >
                Plan and book your perfect trip with expert advice, travel tips,
                destination information and inspiration from us!
              </motion.p>
            </div>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
                <img
                  src={GooglePlayBtn}
                  alt="google-play-btn"
                  width={120}
                  height={24}
                />
              </button>
              <button className="btn-cta">
                <img
                  src={AppStoreBtn}
                  alt="google-play-btn"
                  width={120}
                  height={24}
                />
              </button>
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="max-w-[200px] md:max-w-[300px] xl:max-w-[600px]"
          >
            <img
              src={HeroImage}
              alt="hero-image"
              style={{ objectFit: "contain" }}
              className="lg:w-[500px] overflow-hidden"
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[60px] z-10 w-full max-w-[1920px] shadow-md"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="-mt-12 w-full max-w-[1300px] mx-auto"
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}
