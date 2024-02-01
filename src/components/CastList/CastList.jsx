import CastCard from 'components/CastCard/CastCard';
import css from './CastList.module.css';
import { nanoid } from 'nanoid';

const CastList = ({ cast }) => {
  return (
    <ul className={css.wrapper}>
      {cast.map(({ name, profile_path, character }) => (
        <CastCard
          key={nanoid()}
          name={name}
          profile_path={profile_path}
          character={character}
        />
      ))}
    </ul>
  );
};

export default CastList;
