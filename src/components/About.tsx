import { MdHotel, MdHandshake, MdPlace } from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import AboutImage from "../assets/images/about/about-img.png";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="section flex items-center h-auto bg-gray-50 py-5 mt-10"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between items-center">
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="mb-8 xl:mb-0 lg:mx-auto max-w-[300px] lg:max-w-[400px]"
          >
            <img
              src={AboutImage}
              alt="image"
              className="w-[120px] md:w-[200px] xl:w-full max-w-[500px] rounded-[20px]"
            />
          </motion.div>
          {/* text */}
          <div className="lg:text-center">
            <div className="xl:max-w-[517px] lg:flex lg:items-center lg:flex-col">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2 text-center"
              >
                Why Choose Us
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md text-center p-2 lg:text-base lg:p-0"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                sapiente reprehenderit tenetur eius consequatur magni. Lorem
                ipsum dolor sit amet.
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                <div className="flex flex-col w-[100px] items-center">
                  <MdPlace className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? <CountUp start={0} end={50} delay={0} /> : null}+
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Country <br /> travel
                  </div>
                </div>

                <div className="flex flex-col w-[100px] items-center">
                  <MdHotel className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={2} delay={0.2} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    accommodation <br /> place
                  </div>
                </div>

                <div className="flex flex-col w-[100px] items-center">
                  <MdHandshake className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={0.3} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Partnership <br /> company
                  </div>
                </div>
              </motion.div>
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] 
                w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                See details
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
