import styles from './Review.module.css';
import data from './../data';
import { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  let [currentReview, setCurrentReview] = useState(1);
  const reviews = data;

  const handleRandomReview = () => {
    const randomNumber = Math.floor(Math.random() * reviews.length) + 1;
    setCurrentReview(randomNumber);
  };

  const handlePreviousReview = () => {
    if (currentReview === 1) {
      setCurrentReview(4);
    } else {
      setCurrentReview(prev => {
        return prev - 1;
      });
    }
  };

  const handleNextReview = () => {
    if (currentReview === 4) {
      setCurrentReview(1);
    } else {
      setCurrentReview(prev => {
        return prev + 1;
      });
    }
  };

  const review = reviews.filter(item => item.id === currentReview);

  return (
    <>
      <div className={styles.reviewContainer} key={review.id}>
        <div className={styles.imgContainer}>
          <div className={styles.icon}>
            <FaQuoteRight />
          </div>
          <img src={review[0].image} alt={review[0].name} />
        </div>
        <h2>{review[0].name}</h2>
        <p className={styles.job}>{review[0].job}</p>
        <p className={styles.content}>{review[0].text}</p>

        <div className={styles.actions}>
          <FaChevronLeft onClick={handlePreviousReview} />
          <FaChevronRight onClick={handleNextReview} />
        </div>

        <button onClick={handleRandomReview}>Surprise me!</button>
      </div>
    </>
  );
};

export default Review;
