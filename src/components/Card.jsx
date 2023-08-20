import { useState } from "react";

import styles from "./Card.module.css";
import ThankYou from "./ThankYou";
import CardRatingContent from "./CardRatingContent";

export default function Card() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [rating, setRating] = useState(0);
  // Ratings Array length -  How many ratings to display for User selection
  const ratingsArray = Array.from({ length: 5 });

  return (
    <section className={styles.section}>
      {showThankYou ? (
        <ThankYou rating={rating} maxRating={ratingsArray.length} onClickBack={setShowThankYou} />
      ) : (
        <CardRatingContent
          onSubmit={() => setShowThankYou(prev => !prev)}
          onRate={setRating}
          ratingsArray={ratingsArray}
        />
      )}
    </section>
  );
}
