import { memo } from "react";
import { motion } from "framer-motion"
import styles from "../components/CardRatingContent.module.css";

// EACH RATE BUTTON IS BEING CREATED FROM AN ARRAY AND A TRANSFORMATION ANIMATION APPLIED USING FRAMER MOTION :-)

export const RatingButton = memo(({ active, setActive, onRate, ratingsArray }) => {
  
    const ratingButtons = ratingsArray.map((_, i) => (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        key={i}
        className={`${styles.rating} ${
          active === i + 1 ? styles.active : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => {
          onRate(i + 1);
          setActive(i + 1);
        }}
      >
        {i + 1}
      </motion.div>
    ));
    
    return (<span>
        {ratingButtons}
    </span>)
  });