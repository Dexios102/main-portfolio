import { FaFileDownload } from "react-icons/fa";

const DownloadButton = () => {
  return (
    <button
      className="download-button shadow-md shadow-gray-600 dark:shadow-gray-800
    dark:shadow-lg"
    >
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <FaFileDownload />
        </div>
      </div>
      <span className="text-md font-semilight">Download CV</span>
    </button>
  );
};

export default DownloadButton;
