import { motion } from "framer-motion";

/* Variants */
const containerVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: "100%",
    width: "100%",
  },
};

const Transitions = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-50 bg-[#540804]"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-40 bg-[#edf2f4]"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.25, duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-30 bg-[#03071e]"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transitions;
