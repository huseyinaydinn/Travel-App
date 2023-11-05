import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Axon from "../assets/icons/brands/axon.svg";
import Jetstar from "../assets/icons/brands/jetstar.svg";
import Expedia from "../assets/icons/brands/expedia.svg";
import Qantas from "../assets/icons/brands/qantas.svg";
import Alitalia from "../assets/icons/brands/alitalia.svg";
import Travel from "../assets/icons/brands/travel.svg";

export default function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] flex flex-col justify-center">
      {/* brand wrapper */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between"
      >
        <div>
          <img src={Axon} alt="hotel-brand" width={85} height={32} />
        </div>

        <div>
          <img src={Jetstar} alt="hotel-brand" width={85} height={32} />
        </div>

        <div>
          <img src={Expedia} alt="hotel-brand" width={85} height={32} />
        </div>

        <div>
          <img src={Alitalia} alt="hotel-brand" width={85} height={32} />
        </div>

        <div>
          <img src={Travel} alt="hotel-brand" width={85} height={32} />
        </div>

        <div>
          <img src={Qantas} alt="hotel-brand" width={85} height={32} />
        </div>
      </motion.div>
    </section>
  );
}
