import me from "../../assets/me1.png";
import blobout from "../../assets/blobout.svg";
import redblack from "../../assets/red_black.png";

const Information = () => {
  return (
    <div
      className="flex md:flex-row items-center justify-between flex-col
    overflow-hidden"
    >
      <div className="text-3xl font-bold text-white mt-4">
        <h1 className="text-black dark:text-white text-center mb-8 font-bold">
          {" "}
          Your{" "}
          <span
            className="bg-gradient-to-r from-rose-800 via-red-400
           dark:to-white to-gray-500 bg-clip-text inline-block text-transparent"
          >
            Creative
          </span>{" "}
          Full Stack Developer!
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
          Grade 11 JHS, and I bring both technical expertise and artistic flair
          to create modern and visually appealing web applications. Let's
          collaborate and build something great!
        </p>
        <div className="relative -z-[1]">
          <img
            src={blobout}
            alt="bloblayer"
            className="absolute mix-blend-multiply rotate-40"
          />
          <img src={redblack} alt="splash" />
          <img
            src={me}
            alt="blob_image"
            className="absolute top-0 left-0 rounded-full"
          />
          <div className="text-black dark:text-white text-center absolute text-sm top-10 right-2 font-bold rounded-lg bg-white/10 p-4 backdrop-blur-2xl">
            <span className="text-4xl">5+</span>
            <br />
            <span className="text-sm">Years of</span>
            <br />
            <span className="text-sm">Coding Exp.</span>
          </div>
          <div className="text-black dark:text-white text-center absolute text-sm bottom-28 left-2 font-bold rounded-lg bg-white/10 p-4 backdrop-blur-2xl">
            <span className="text-4xl">15+</span>
            <br />
            <span className="text-sm">Projects</span>
            <br />
            <span className="text-sm">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
