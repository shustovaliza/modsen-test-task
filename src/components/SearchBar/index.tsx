import { useFormik } from 'formik';
import { memo } from 'react';

import ClearSearchIcon from '@/assets/icons/closeIcon.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';

import { validationSchema } from './searchBar.validation';
import {
  SearchBarErrorMessage,
  SearchBarForm,
  SearchButton,
  SearchInput,
  SearchInputWrap,
} from './styled';

type SearchBarProps = {
  initialValue: string;
  onSubmit: (values: { search: string }) => void;
  onReset: () => void;
};

export const SearchBar = memo(
  ({ initialValue, onSubmit, onReset }: SearchBarProps) => {
    const { values, errors, handleChange, handleSubmit, resetForm } = useFormik(
      {
        initialValues: {
          search: initialValue,
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
        onReset: onReset,
      },
    );

    const resetSearchForm = () =>
      resetForm({
        values: {
          search: '',
        },
      });

    return (
      <SearchBarForm
        onSubmit={handleSubmit}
        noValidate
        aria-disabled={!errors.search}
      >
        {errors.search && (
          <SearchBarErrorMessage>{errors.search}</SearchBarErrorMessage>
        )}
        <SearchInputWrap>
          <SearchInput
            id="search"
            name="search"
            type="text"
            placeholder="Search by title"
            onChange={handleChange}
            value={values.search}
          />
          <SearchButton
            type="reset"
            onClick={resetSearchForm}
            disabled={!values.search}
          >
            {values.search ? <ClearSearchIcon /> : <SearchIcon />}
          </SearchButton>
        </SearchInputWrap>
      </SearchBarForm>
    );
  },
);
