import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.searchQuery;
    onSubmit(value);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.searchFormInput}
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Search new movie..."
      />
      <button type="submit" className={css.button} name="button">
        <span className={css.buttonLabel}>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
