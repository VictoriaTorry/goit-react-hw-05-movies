import css from './ReviewsItem.module.css';

const ReviewsItem = ({ id, author, content }) => {
  return (
    <li className={css.reviewsItem}>
      <h3 className={css.reviewsAuthor}>{author}</h3>
      <p className={css.reviewsContent}>{content}</p>
    </li>
  );
};

export default ReviewsItem;
