import css from './Home.module.css';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendyMovies } from 'components/utils/api-servises';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendyMovies() {
      try {
        setIsLoading(true);
        const data = await fetchTrendyMovies();
        setMovies(data.results);
      } catch (error) {
        setError('Something went wrong:(');
      } finally {
        setIsLoading(false);
      }
    }
    getTrendyMovies();
  }, []);

  return (
    <main className={css.main}>
      {isLoading && <Loader />}
      <h2 className={css.trendyTitle}>Trending Today</h2>
      {movies && <MoviesList movies={movies} />}
      {error && <h2>{error}</h2>}
    </main>
  );
};

export default Home;
