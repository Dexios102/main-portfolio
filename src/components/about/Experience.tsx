import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ListBullet from "../ListBullet";

interface Props {
  position: string;
  company: string;
  time: string;
  address: string;
  companyLink: string;
  work: string;
}
const Details = ({
  position,
  company,
  time,
  companyLink,
  address,
  work,
}: Props) => {
  const ref = useRef(null);
  return (
    <li ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60] mx-auto
  flex flex-col items-center justify-between"
    >
      <ListBullet reference={ref}/>
      <div className="bg-slate-800 rounded-lg p-8">
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a href={companyLink}
          target="_blank"
          className="text-[#bf0603] capitalize">@{company}</a>
        </h3>
        <span className="capitalize font-medium text-slate-200">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-slate-400">{work}</p>
      </div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className="mt-20 pb-20">
      <h1 className="text-5xl md:text-8xl font-bold text-center mb-10">Experience</h1>
      <div className="w-[80%] md:w-[45%] mx-auto relative" ref={ref}>
        <motion.div style={{scaleY: scrollYProgress}}
        className="absolute -left-5 md:-left-[92px] top-0 w-[4px] h-full origin-top bg-slate-800"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="IT Intern | Web Application Developer"
            company="BFAR-MIMAROPA"
            time="February 2023 - May 2023"
            companyLink="https://mimaropa.bfar.da.gov.ph/"
            address="Guinobatan,Calapan City, Oriental Mindoro, Philippines"
            work="As an IT intern and web developer, I developed an automated Payroll Management System using Laravel,
         which improved computation and slip generation processes. Additionally, I conducted efficient network
          troubleshooting and repair, along with personal computer maintenance."
          />
          <Details
            position="Freelance Web Developer"
            company="Self-Employed"
            companyLink="none"
            time="2022 - Present"
            address="Remote"
            work="As a freelance web developer, I collaborated with various clients to
             design and develop custom websites and web applications. Utilizing a diverse skill
              set in both front-end and back-end technologies, I created responsive and
               user-friendly interfaces. Additionally, I provided ongoing support and maintenance
                services to ensure the optimal performance of client projects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
