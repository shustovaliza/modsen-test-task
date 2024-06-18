import * as Yup from 'yup';

export const validationSchema = Yup.object({
  search: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(50, 'Must be 50 characters or less'),
});
