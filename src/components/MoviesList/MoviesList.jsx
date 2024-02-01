import css from './MoviesList.module.css';
import MovieItem from 'components/MovieItem/MovieItem';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={css.moviesListItem}>
          <MovieItem id={id} title={title} poster_path={poster_path} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
