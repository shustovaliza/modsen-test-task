import {
  ErrorBoundaryContainer,
  ErrorContentWrap,
  ResetButton,
} from './styled';

export const ErrorBoundaryFallback = ({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) => {
  return (
    <ErrorBoundaryContainer>
      <ErrorContentWrap>
        <h1>Oops, something went wrong!</h1>
        <ResetButton onClick={resetErrorBoundary}>Try again</ResetButton>
      </ErrorContentWrap>
    </ErrorBoundaryContainer>
  );
};
