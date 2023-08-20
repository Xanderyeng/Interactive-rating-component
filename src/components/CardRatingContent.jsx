import { useState } from "react";
import { motion } from "framer-motion"

import StarIcon from "../assets/icon-star.svg";
import styles from "./CardRatingContent.module.css";
import { RatingButton } from "../features/RatingButton";

const starStyles = {
  backgroundImage: `url(${StarIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function CardRatingContent({ onSubmit, onRate, ratingsArray }) {
  const [active, setActive] = useState(null);
  // ONLY WORK WHEN A SELECTION HAS BEEN MADE
  function handleSubmit() {
    if(!active) return;
    onSubmit(true);
  }  

  return (
    <>
      <div className={`${styles.rating}`} style={starStyles}></div>
      <h1>How did we do&#63;</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering&#33;
      </p>
      {<RatingButton active={active} setActive={setActive} onRate={onRate} ratingsArray={ratingsArray} />}
      <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.5 }} onClick={handleSubmit}>Submit</motion.button>
    </>
  );
}
