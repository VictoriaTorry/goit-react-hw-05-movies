import css from './CastCard.module.css';
import defaultImg from '../../img/default-bg.jpg';

const CastCard = ({ name, profile_path, character }) => {
  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : defaultImg;
  return (
    <li className={css.castItem}>
      <img className={css.castImg} src={imgUrl} alt={name} />
      <div className={css.castTitlesBlock}>
        <p className={css.castTitle}>{name}</p>
        <p className={css.castCharacter}>
          <i>Character:</i> {character}
        </p>
      </div>
    </li>
  );
};

export default CastCard;
