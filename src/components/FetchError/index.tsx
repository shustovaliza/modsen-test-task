import { ErrorWrap } from './styled';

export const FetchError = () => {
  return (
    <ErrorWrap>
      <h1>Oops, something went wrong!</h1>
      <h2>Try to reload the page.</h2>
    </ErrorWrap>
  );
};
