import {motion, useScroll} from "framer-motion";

interface ListBulletProps {
    reference: React.MutableRefObject<HTMLElement | null>
}

const ListBullet: React.FC<ListBulletProps> = ({reference}) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    });
  return (
    <figure className="absolute -left-[79px] md:-left-[151px] dark:stroke-white stroke-red-800">
        <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className="stroke-[#bf0603] stoke-1 fill-none" />
            <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light" 
            style={{pathLength: scrollYProgress}}/>
            <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-[#bf0603]" />
        </svg>
    </figure>
  )
}

export default ListBullet