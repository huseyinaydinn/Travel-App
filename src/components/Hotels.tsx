import Brands from "./Brands";
import HotelSlider from "./HotelSlider";

export default function Hotels() {
  return (
    <section className=" flex items-center py-5" id="hotels">
      <div className="container mx-auto">
        <Brands />
        <HotelSlider />
      </div>
    </section>
  );
}
