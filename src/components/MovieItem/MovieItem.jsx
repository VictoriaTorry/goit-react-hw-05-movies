import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';
import defaultImg from '../../img/default-bg.jpg';

const MovieItem = ({ id, title, poster_path }) => {
  const location = useLocation();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultImg;

  return (
    <Link
      to={`/movies/${id}`}
      state={{ from: location }}
      className={css.movieListLink}
    >
      <img className={css.movieListImg} src={posterUrl} alt={title} />
      <span className={css.title}>{title}</span>
    </Link>
  );
};

export default MovieItem;
