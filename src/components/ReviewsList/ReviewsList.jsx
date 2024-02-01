import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import css from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <ul className={css.reviewsList}>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id} author={author} content={content} />
      ))}
    </ul>
  );
};

export default ReviewsList;
