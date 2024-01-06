import DownloadButton from "../components/DownloadButton";
import { MdConnectWithoutContact } from "react-icons/md";

const HeroPage = () => {
  return (
    <div className="h-full">
      <div className="w-full h-full">
        <div
          className="text-center flex flex-col justify-center xl:pt-60
        xl:text-left h-full container mx-auto"
        >
          <h1 className="h1">
            Transforming Visions <br /> Into{" "}
            <span className="gradient-text">Digital Realities</span>{" "}
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus incidunt veniam pariatur fugiat assumenda eaque qui,
            atque nihil cupiditate inventore?
          </p>
          <div className="flex items-center gap-4">
            <DownloadButton />
            <button
              className="relative inline-flex items-center justify-center p-0.5
             me-2 overflow-hidden text-lg font-semibold text-rose-800 rounded-lg group
              bg-gradient-to-br from-red-400 to-red-600 group-hover:from-rose-600
               group-hover:to-red-500 hover:text-white focus:ring-4 focus:outline-none
               shadow-md shadow-gray-600"
            >
              <span
                className="relative flex items-center px-2 py-3.5 transition-all ease-in
               duration-75 bg-white rounded-md group-hover:bg-opacity-0"
              >
                <MdConnectWithoutContact className="me-2 w-6 h-6" />
                Hire Me
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
