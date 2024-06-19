import { useFormik } from 'formik';
import { ChangeEvent, memo } from 'react';

import ClearSearchIcon from '@/assets/icons/closeIcon.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';

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
    const { values, errors, handleChange, resetForm, submitForm } = useFormik({
      initialValues: {
        search: initialValue,
      },
      validationSchema: validationSchema,
      onSubmit: onSubmit,
      onReset: onReset,
    });
    const debouncedSubmit = useDebounce({ callback: submitForm, delay: 500 });

    const resetSearchForm = () =>
      resetForm({
        values: {
          search: '',
        },
      });

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      handleChange(event);
      debouncedSubmit();
    };

    return (
      <SearchBarForm
        onSubmit={(e) => e.preventDefault()}
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
            onChange={onChange}
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
