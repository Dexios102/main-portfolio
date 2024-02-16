import { motion, useScroll } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { useRef } from "react";
import ListBullet from "../ListBullet";

interface Props {
  type: string,
  time: string,
  place: string,
  info: string
}
const Details = ({
  type, time, place, info
}: Props) => {
  const ref = useRef(null);
  return (
    <li ref={ref}
      className="my-4 md:my-8 first:mt-0 last:mb-0 w-[60] mx-auto
  flex flex-col items-center justify-between bg-black/10 rounded-lg p-2 md:p-8
  backdrop-blur-lg border-l-8 border-slate-700 shadow-lg shadow-slate-500
  dark:shadow-none"
    >
      <ListBullet reference={ref}/>
      <motion.div variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5 }} className="rounded-lg p-4 md:p-8">
        <h3 className="font-extrabold text-xl md:text-2xl text-[#c5283d]">
          {type}
        </h3>
        <span className="capitalize font-medium dark:text-[#fff0f3] text-sm md:text-base
        text-slate-800">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-slate-300 mt-4 text-sm md:text-base
        text-slate-700">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className="mt-20 pb-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10
      tracking-wide">Education</h1>
      <div className="w-[80%] md:w-[45%] mx-auto relative" ref={ref}>
        <motion.div style={{scaleY: scrollYProgress}}
        className="absolute -left-5 md:-left-[92px] top-10 w-[4px] h-full origin-top bg-red-800"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Information Technology"
            time="2019 - 2023"
            place="Mindoro State University"
            info="Studied a wide range of subjects including software development, database management,
             networking, and cybersecurity information systems. Completed various projects and assignments
              to enhance practical skills and understanding of IT concepts."
          />
          <Details
            type="TVL-NCII Computer Programming"
            time="2017 - 2019"
            place="ACMCL College"
            info="Focused on fundamental principles of computer programming, including algorithm development,
             data structures, and programming languages such as HTML, CSS, JS and C#. I developed a attendance
             system for a school using C# and MSSQL server. Engaged in hands-on projects to apply theoretical
             knowledge in real-world scenarios."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
