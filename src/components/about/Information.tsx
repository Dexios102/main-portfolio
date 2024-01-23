import { motion } from "framer-motion";
import { fadeIn, scaleUp } from "../../utils/variants";

import me from "../../assets/me1.png";
import redblack from "../../assets/red_black.png";

const Information = () => {
  return (
    <div
      className="flex md:flex-row md:flex-1/2 items-center justify-between flex-col
    overflow-hidden"
    >
      <div className="text-3xl font-bold text-white mt-4 basis-1/2">
        <motion.h1
          className="text-black dark:text-white text-center mb-8 font-bold md:text-left md:text-6xl
           md:font-extrabold"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          Your{" "}
          <motion.span
            className="bg-gradient-to-r from-rose-800 via-red-400
           dark:to-white to-gray-500 bg-clip-text inline-block text-transparent"
            variants={scaleUp(1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.5 }}
          >
            Creative
          </motion.span>
          <br className="hidden md:block" /> Full Stack Developer!
        </motion.h1>
        <motion.p
          className="dark:text-white text-md border-b-2 border-red-800 pl-2 mb-2 max-w-[40%]
        font-bold uppercase md:max-w-[30%] md:mb-6"
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5 }}
        >
          Biography
        </motion.p>
        <motion.p
          className="dark:text-gray-300 text-md text-center md:text-left md:max-w-xl"
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5 }}
        >
          Hey there! I'm Dexter, a Full Stack Developer from the Philippines.
          Specializing MERN Stack Typescript, I'm currently freelancing and
          focusing on web/software development. My coding journey started in
          Grade 11 JHS, and I bring both technical expertise and artistic flair
          to create modern and visually appealing web applications. Let's
          collaborate and build something great!
        </motion.p>
      </div>
      <div className="relative -z-[1] basis-1/2">
        <motion.img
          src={redblack}
          alt="splash"
          variants={scaleUp(1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 1.5 }}
        />
        <img
          src={me}
          alt="blob_image"
          className="absolute top-0 left-0 rounded-full hover:grayscale md:w-[32rem] md:left-32 md:top-36"
        />
        <motion.div
          className="text-black dark:text-white text-center absolute text-sm
           top-10 right-2 font-bold rounded-lg bg-white/10 p-4 backdrop-blur-2xl md:text-lg md:px-6"
          variants={scaleUp(2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-4xl">5+</span>
          <br />
          <span className="text-sm">Years of</span>
          <br />
          <span className="text-sm">Coding Exp.</span>
        </motion.div>
        <motion.div
          className="text-black dark:text-white text-center absolute text-sm
           bottom-28 left-2 font-bold rounded-lg bg-white/10 p-4 backdrop-blur-2xl md:text-lg md:px-6"
          variants={scaleUp(2.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-4xl">15+</span>
          <br />
          <span className="text-sm">Projects</span>
          <br />
          <span className="text-sm">Completed</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Information;
