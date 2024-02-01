import CastList from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'components/utils/api-servises';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCredits() {
      setIsLoading(true);
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError('Something went wrong:(');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieCredits();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {cast?.length === 0 && (
        <p>We do not have information about any character</p>
      )}
      {!isLoading && !error && cast && <CastList cast={cast} />}
    </>
  );
};

export default Cast;
