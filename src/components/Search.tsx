import { useContext } from "react";
import { SearchContext } from "../context/search";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px] hidden xl:block"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px] hidden xl:block w-full shadow-lg relative"
      }`}
    >
      <div className={`h-full flex ${searchActive && "container mx-auto"}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button className="btn btn-sm btn-accent xl:w-[164px]">Search</button>
        </div>
      </div>
    </div>
  );
}
