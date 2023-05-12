import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = evt => {
    const { value } = evt.currentTarget;

    setInputValue(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (inputValue.trim() === '') {
      alert('Search query can not be empty.');
      return;
    }
    onSubmit(inputValue);
    clearForm();
  };
  const clearForm = () => {
    setInputValue('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>🔍</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films in database"
        />
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
