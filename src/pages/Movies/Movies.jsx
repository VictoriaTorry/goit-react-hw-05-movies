import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedMovies } from 'components/utils/api-servises';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import notify from 'components/utils/alert';
import { ToastContainer } from 'react-toastify';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getSearchedMovies() {
      if (query === '') return;

      try {
        setIsLoading(true);
        const data = await fetchSearchedMovies(query);
        setMovies(data.results);
        if (data.results.length === 0) {
          return notify('warning');
        }
      } catch (error) {
        setError('Something went wrong:(');
        notify('error');
      } finally {
        setIsLoading(false);
      }
    }
    getSearchedMovies();
  }, [query]);

  const onSearchParams = searchMovie => {
    searchParams.set('query', searchMovie);
    setSearchParams(searchParams);
  };

  return (
    <main className={css.main}>
      {isLoading && <Loader />}
      {!isLoading && <SearchForm onSubmit={onSearchParams} />}
      {!isLoading && query !== null && <MoviesList movies={movies} />}
      {error && <h2>{error}</h2>}
      <ToastContainer />
    </main>
  );
}
