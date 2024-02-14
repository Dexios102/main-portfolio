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
      className="my-8 first:mt-0 last:mb-0 w-[60] mx-auto
  flex flex-col items-center justify-between"
    >
      <ListBullet reference={ref}/>
      <motion.div variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5 }} className="bg-black/100 rounded-lg p-8">
        <h3 className="capitalize font-bold text-2xl text-white">
          {type}
        </h3>
        <span className="capitalize font-medium text-slate-200">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-slate-400 mt-4">{info}</p>
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
      <h1 className="text-5xl md:text-8xl font-extrabold text-center mb-10">Education</h1>
      <div className="w-[80%] md:w-[45%] mx-auto relative" ref={ref}>
        <motion.div style={{scaleY: scrollYProgress}}
        className="absolute -left-5 md:-left-[92px] top-0 w-[4px] h-full origin-top bg-slate-800"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Information Technology"
            time="2019 - 2023"
            place="Mindoro State University"
            info="Studied a wide range of subjects including software development, database management,
             networking, and information systems. Completed various projects and assignments
              to enhance practical skills and understanding of IT concepts."
          />
          <Details
            type="NC2 Computer Programming"
            time="2017 - 2019"
            place="ACMCL College"
            info="Focused on fundamental principles of computer programming, including algorithm development,
             data structures, and programming languages such as Java and C#.
              Engaged in hands-on projects to apply theoretical knowledge in real-world scenarios."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
