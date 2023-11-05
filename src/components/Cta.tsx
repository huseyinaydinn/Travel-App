import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ctaImage from "../assets/images/cta/phone.png";
import GooglePlayBtn from "../assets/icons/buttons/google-play.svg";
import AppStoreBtn from "../assets/icons/buttons/app-store.svg";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10 md:p-4 overflow-hidden"
      id="contact"
    >
      <div className="w-full flex flex-col md:flex-row xl:justify-around items-center ">
        {/* text */}
        <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
          <div className="max-w-[520px] mx-auto">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h2"
            >
              Download our App and hit the road
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mb-10"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              est fugit sequi numquam modi maiores quis eaque fuga, sit eligendi
              earum quaerat labore. Voluptatum, modi odio. Doloribus animi sequi
              ullam?
            </motion.p>

            {/* btns */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex gap-x-3 justify-center md:justify-start"
            >
              <button className="btn-cta">
                <img
                  src={GooglePlayBtn}
                  alt="google-play"
                  width={132}
                  height={36}
                />
              </button>
              <button className="btn-cta">
                <img
                  src={AppStoreBtn}
                  alt="app-store"
                  width={132}
                  height={36}
                />
              </button>
            </motion.div>
          </div>
        </div>
        {/* text */}
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 flex justify-center order-1 md:order-none"
        >
          <img src={ctaImage} alt="contact-img" width={320} height={640} />
        </motion.div>
      </div>
    </section>
  );
}
