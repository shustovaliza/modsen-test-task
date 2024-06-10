import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  SearchBarErrorMessage,
  SearchBarForm,
  SearchButton,
  SearchInput,
  SearchInputWrap,
} from './styled';
import SearchIcon from '@/assets/icons/search.svg?react';
import ClearSearchIcon from '@/assets/icons/closeIcon.svg?react';

export const SearchBar = () => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(50, 'Must be 50 characters or less'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <SearchBarForm
      onSubmit={formik.handleSubmit}
      noValidate
      aria-disabled={!formik.errors.search}
    >
      {formik.errors.search && (
        <SearchBarErrorMessage>{formik.errors.search}</SearchBarErrorMessage>
      )}
      <SearchInputWrap>
        <SearchInput
          id="search"
          name="search"
          type="text"
          placeholder="Search art, artist, work..."
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        <SearchButton
          type="reset"
          onClick={() =>
            formik.resetForm({
              values: {
                search: '',
              },
            })
          }
          disabled={!formik.values.search}
        >
          {formik.values.search ? <ClearSearchIcon /> : <SearchIcon />}
        </SearchButton>
      </SearchInputWrap>
    </SearchBarForm>
  );
};
