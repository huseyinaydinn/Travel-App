import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

type Testimonial = {
  message: string;
  avatar: string;
  name: string;
  job: string;
};

const testimonialData: Testimonial[] = [
  {
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, commodi?",
    avatar: "src/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer ",
  },
  {
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, commodi?",
    avatar: "src/assets/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer ",
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <img
                  src={avatar}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
