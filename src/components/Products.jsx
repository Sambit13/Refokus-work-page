import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion library
import Button from "./Button";
import Product from "./Product";

const Products = () => {
  const products = [
    { title: "arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ", live: true, case: false },
    { title: "Cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false },
    { title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: true },
    { title: "maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true },
    { title: "Yahoo", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="relative mt-32">
      {products.map((product, index) => (
        <Product key={index} product={product} mover={mover} count={index} />
      ))}
      {/* Display the animation */}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ease: [0.76,0,0.24,1] , duration: .6}}
          className="window absolute w-[27rem] h-[23rem] left-[41%] bg-white overflow-hidden"
        >
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1] , duration: .6}} className="w-full h-full bg-sky-100 bg-i" ></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1] , duration: .6}} className="w-full h-full bg-sky-200"></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1] , duration: .6}} className="w-full h-full bg-sky-300"></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1] , duration: .6}} className="w-full h-full bg-sky-400"></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1] , duration: .6}} className="w-full h-full bg-sky-500"></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
