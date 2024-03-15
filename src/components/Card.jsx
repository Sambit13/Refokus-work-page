
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from "framer-motion"
// eslint-disable-next-line react/prop-types
const Card = ({width,start,para,hover="false" }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff" , padding:"25px"}} className={`w-1/2 bg-zinc-800 p-5 rounded-lg 
    ${width}  `}>
        <div className="w-full">
        <div className="w-full flex items-center justify-between">
            <h3>One Heading</h3>
            <FaArrowRightLong />

        </div>
        <h1 className="text-3xl font-medium mt-10">Whatever heading</h1>
        </div>
        <div className="down w-full mt-40">
            {
                start===true && (
                    <>
                    <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a Project</h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] " >Contact Us</button>
            </>
                )
            }
            {
                para && (
                    <p className="text-sm font-medium text-zinc-500 py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, hic.</p>
                )
            }
            
            
        </div>
    </motion.div>
  )
}

export default Card