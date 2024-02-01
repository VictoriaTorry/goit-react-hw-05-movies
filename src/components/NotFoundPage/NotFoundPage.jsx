import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={css.container}>
      <h1>Page is not found</h1>
      <p>
        Go to the <Link to="/">Home</Link> page
      </p>
    </main>
  );
};

export default NotFoundPage;
