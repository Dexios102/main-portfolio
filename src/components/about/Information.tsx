import blob from "../../assets/blob.svg";
import blobout from "../../assets/blobout.svg";

const Information = () => {
  return (
    <div
      className="flex md:flex-row items-center justify-between flex-col
    overflow-hidden"
    >
      <div className="text-3xl font-bold text-white mt-4">
        <h1 className="text-black dark:text-white text-center mb-8 font-bold">
          {" "}
          Your Creative Full Stack Developer!
        </h1>
        <p
          className="dark:text-white text-md border-b-2 border-red-800 pl-2 mb-2 max-w-[40%]
        font-bold uppercase"
        >
          Biography
        </p>
        <p className="dark:text-gray-300 text-md text-center">
          Hey there! I'm Dexter, a Full Stack Developer from the Philippines.
          Specializing MERN Stack Typescript, I'm currently freelancing and
          focusing on web/software development. My coding journey started in
          grade 11, and I bring both technical expertise and artistic flair to
          create modern and visually appealing web applications. Let's
          collaborate and build something great!
        </p>
        <div className="relative">
          <img src={blobout} alt="" className="" />
          <img src={blob} alt="" className="absolute top-0 left-0" />
        </div>
      </div>
    </div>
  );
};

export default Information;
