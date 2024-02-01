import css from './MovieCard.module.css';
import defaultImg from '../../img/default-bg.jpg';
import { Link, Outlet } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultImg;

  const score = vote_average ? (vote_average * 10).toFixed(2) : '';

  return (
    <div className={css.movieCardWrapper}>
      <div className={css.movieCardInfo}>
        <div className={css.movieCardImg}>
          <img src={posterUrl} alt={title} />
        </div>
        <div className={css.movieCardContext}>
          <h3 className={css.movieCardTitle}>{title}</h3>
          <p className={css.movieCardScore}>User score: {score}&#37;</p>
          <h4 className={css.movieCardOverviwTitle}>Overview</h4>
          <p className={css.movieCardText}>{overview}</p>
          <h5>Genres</h5>
          <div className={css.movieCardGenres}>
            {genres.map(({ id, name }) => (
              <span key={id} className={css.movieCardGenre}>
                {name}{' '}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={css.movieCardMoreInfo}>
        <p className={css.movieCardMoreInfoTitle}>Additional Information</p>
        <Link to={`cast`} className={css.movieCardMoreInfoLink}>
          Cast
        </Link>
        <Link to={`reviews`} className={css.movieCardMoreInfoLink}>
          Reviews
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieCard;
