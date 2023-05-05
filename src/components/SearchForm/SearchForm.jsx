import { useState } from 'react';
import {
  SearchFormInput,
  SearchFormButtonLabel,
  SearchFormButton,
  SearchForm,
} from './SearchForm.styled';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.length < 2 || !query.trim()) {
      Notiflix.Notify.failure(`Type the show's name`);
      return;
    }

    onSubmit(query);
    setQuery('');
    e.target.reset();
  };

  return (
    <section>
      <SearchForm className="SearchForm" onSubmit={handleSubmit}>
        <SearchFormButton type="submit" className="SearchForm-button">
          {
            <SearchFormButtonLabel className="SearchForm-button-label">
              Search
            </SearchFormButtonLabel>
          }
        </SearchFormButton>
        <SearchFormInput
          name="searchValue"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search TV shows"
          onChange={onChange}
        />
      </SearchForm>
    </section>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
