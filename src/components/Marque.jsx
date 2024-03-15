import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Marque = ({ imagesURL }) => {
  return (
    <div className="flex w-full overflow-hidden">
      {imagesURL.map((url, index) => (
        <motion.div
          key={index} // Added key prop
          initial={{ x: 0 }} // Initial position
          animate={{ x: "-100%" }} // Move elements to the left by 100%
          transition={{
            ease: "linear", // Linear animation
            duration: 7, // Animation duration (changed to 7 seconds)
            repeat: Infinity // Repeat the animation infinitely
          }}
          className="flex flex-shrink-0 gap-40 py-10 pr-40"
        >
          <img src={url} alt={`Image ${index}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default Marque;
