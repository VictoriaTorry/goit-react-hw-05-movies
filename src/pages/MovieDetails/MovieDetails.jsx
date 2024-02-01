import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import MovieCard from 'components/MovieCard/MovieCard';
import { fetchMovieDetails } from 'components/utils/api-servises';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location)

  useEffect(() => {
    setIsLoading(true);
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('Something went wrong:(');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <main className={css.main}>
      {isLoading && <Loader />}
      <Link className={css.goBack} to={backLinkRef.current.state?.from ?? '/movies'}>&larr; Go back</Link>
      {!isLoading && movie && !error && <MovieCard movie={movie} />}
      {error && <h2>{error}</h2>}
    </main>
  );
};

export default MovieDetails;
