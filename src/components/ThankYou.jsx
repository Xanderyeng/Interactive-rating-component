import React from "react";

import styles from "./ThankYou.module.css";
import IllustrationThankYou from "../assets/illustration-thank-you.svg";

const illutrastionStyles = {
  backgroundImage: `url(${IllustrationThankYou})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "50%",
  objectFit: "contain",
};

export default function ThankYou({ rating, maxRating, onClickBack }) {
  return (
    <>
    <button 
    className={styles.back}
    onClick={() => onClickBack(false)}
    >
    &#8592;
    </button>
      <div className={styles.thankYou}>
        <span style={illutrastionStyles}></span>
        <span>
          You selected {rating} out of {maxRating}
        </span>
        <h1>Thank you&#33;</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support&#44; don&#39;t hesitate to get in touch&#33;
        </p>
      </div>
    </>
  );
}
