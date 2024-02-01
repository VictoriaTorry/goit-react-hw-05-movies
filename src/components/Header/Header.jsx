import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <ul className={css.headerList}>
          <li className={css.headerItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? css.navLink + ' ' + css.active : css.navLink}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${isActive ? css.navLink + ' ' + css.active : css.navLink}`
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
