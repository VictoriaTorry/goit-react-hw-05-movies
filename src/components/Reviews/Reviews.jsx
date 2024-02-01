import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/utils/api-servises';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      setIsLoading(true);
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError('Something went wrong:(');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviews?.length === 0 && (
        <p>We do not have any reviews for this movie.</p>
      )}
      {!isLoading && !error && reviews && <ReviewsList reviews={reviews} />}
    </div>
  );
};

export default Reviews;
