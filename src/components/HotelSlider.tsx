import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar, FaSwimmer } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { MdFastfood } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";

interface HotelInfo {
  icon: JSX.Element;
  text: string;
}

interface Hotel {
  type: string;
  name: string;
  price: string;
  image: string;
  info: HotelInfo[];
}

const hotels: Hotel[] = [
  {
    type: "Hotel",
    name: "Maldives",
    price: "299 $",
    image: "src/assets/images/hotelSlider/slider-1.png",
    info: [
      {
        icon: <MdFastfood />,
        text: "Breakfast",
      },

      {
        icon: <AiOutlineWifi />,
        text: "Wi-fi",
      },

      {
        icon: <FaSwimmer />,
        text: "Swiming",
      },
    ],
  },
  {
    type: "Hotel",
    name: "Antalya",
    price: "299 $",
    image: "src/assets/images/hotelSlider/slider-2.png",
    info: [
      {
        icon: <MdFastfood />,
        text: "Breakfast",
      },

      {
        icon: <AiOutlineWifi />,
        text: "Wi-fi",
      },

      {
        icon: <FaSwimmer />,
        text: "Swiming",
      },
    ],
  },
  {
    type: "Hotel",
    name: "Dubai",
    price: "299 $",
    image: "src/assets/images/hotelSlider/slider-3.png",
    info: [
      {
        icon: <MdFastfood />,
        text: "Breakfast",
      },

      {
        icon: <AiOutlineWifi />,
        text: "Wi-fi",
      },

      {
        icon: <FaSwimmer />,
        text: "Swiming",
      },
    ],
  },
];

export default function HotelSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {hotels.map((hotel, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[200px] mx-auto">
                <img
                  src={hotel.image}
                  alt="hotel-image"
                  className="w-full"
                  width={380}
                  height={284}
                />

                <div className="flex justify-between mt-4">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {hotel.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">
                      {hotel.name}
                    </h3>
                    <h3 className="mb-2 text-accent font-semibold uppercase">
                      {hotel.price}
                    </h3>
                  </div>
                  {/* stars */}
                  <div className="flex gap-x-2 text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                {/* hotel info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {hotel.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className=" w-12 h-12 rounded-full flex justify-center items-center">
                          {item.icon}
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
